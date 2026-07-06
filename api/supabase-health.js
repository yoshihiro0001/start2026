import { createClient } from '@supabase/supabase-js';

function jsonResponse(res, statusCode, payload) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.status(statusCode).json(payload);
}

export default async function handler(req, res) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';
  const probeTable = process.env.SUPABASE_HEALTH_TABLE || 'reality_healthcheck_probe';

  // Public-safe runtime visibility. Never log or return the key value.
  console.log('[Reality Verification] NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl || 'missing');
  console.log('[Reality Verification] NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY exists:', Boolean(publishableKey));

  const restRootEndpoint = supabaseUrl ? `${supabaseUrl.replace(/\/$/, '')}/rest/v1/` : null;
  const dataProbeEndpoint = supabaseUrl ? `${supabaseUrl.replace(/\/$/, '')}/rest/v1/${probeTable}?select=*&limit=1` : null;

  const basePayload = {
    checkedAt: new Date().toISOString(),
    environment: process.env.VERCEL_ENV || 'unknown',
    supabaseUrl: supabaseUrl || null,
    publishableKeyExists: Boolean(publishableKey),
    clientCreated: false,
    runtimeImplementation: {
      createClientUsesPublishableKey: true,
      authorizationHeaderSent: false,
      apikeyHeaderSent: true,
      probeTable
    },
    restRootCheck: {
      ok: false,
      status: null,
      endpoint: restRootEndpoint
    },
    dataApiCheck: {
      ok: false,
      status: null,
      endpoint: dataProbeEndpoint,
      meaning: 'not_checked'
    },
    realityVerified: false,
    status: 'failed',
    message: 'Supabase is not verified yet.'
  };

  if (!supabaseUrl || !publishableKey) {
    return jsonResponse(res, 200, {
      ...basePayload,
      message: 'Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in runtime environment variables.'
    });
  }

  let client;
  try {
    client = createClient(supabaseUrl, publishableKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      }
    });
  } catch (error) {
    return jsonResponse(res, 200, {
      ...basePayload,
      clientCreated: false,
      message: `Supabase client creation failed: ${error.message}`
    });
  }

  const headers = {
    apikey: publishableKey,
    Accept: 'application/json'
  };

  let restRootCheck = basePayload.restRootCheck;
  let dataApiCheck = basePayload.dataApiCheck;

  try {
    const rootResponse = await fetch(restRootEndpoint, {
      method: 'GET',
      headers
    });
    restRootCheck = {
      ok: rootResponse.ok,
      status: rootResponse.status,
      endpoint: restRootEndpoint
    };
  } catch (error) {
    restRootCheck = {
      ok: false,
      status: null,
      endpoint: restRootEndpoint,
      error: error.message
    };
  }

  try {
    const dataResponse = await fetch(dataProbeEndpoint, {
      method: 'GET',
      headers
    });
    const bodyText = await dataResponse.text();
    let parsedBody = null;
    try {
      parsedBody = bodyText ? JSON.parse(bodyText) : null;
    } catch (_) {
      parsedBody = null;
    }

    let meaning = 'failed';
    if (dataResponse.ok) {
      meaning = 'connected_200_ok';
    } else if (dataResponse.status === 401) {
      meaning = 'auth_rejected';
    } else if (dataResponse.status === 404 || dataResponse.status === 400) {
      meaning = 'data_api_reached_but_probe_table_missing_or_inaccessible';
    }

    dataApiCheck = {
      ok: dataResponse.ok,
      status: dataResponse.status,
      endpoint: dataProbeEndpoint,
      meaning,
      responseCode: parsedBody && parsedBody.code ? parsedBody.code : null
    };
  } catch (error) {
    dataApiCheck = {
      ok: false,
      status: null,
      endpoint: dataProbeEndpoint,
      meaning: 'network_or_runtime_error',
      error: error.message
    };
  }

  const verified = dataApiCheck.ok && dataApiCheck.status === 200;

  return jsonResponse(res, 200, {
    ...basePayload,
    clientCreated: Boolean(client),
    restRootCheck,
    dataApiCheck,
    healthCheck: dataApiCheck,
    realityVerified: verified,
    status: verified ? 'connected' : 'failed',
    message: verified
      ? 'Reality Verified: Supabase env vars are readable, client was created, and Data API returned 200 OK.'
      : `Reality Verification failed: Data API status ${dataApiCheck.status || 'none'} (${dataApiCheck.meaning}).`
  });
}

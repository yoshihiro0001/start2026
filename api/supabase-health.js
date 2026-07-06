import { createClient } from '@supabase/supabase-js';

function jsonResponse(res, statusCode, payload) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.status(statusCode).json(payload);
}

export default async function handler(req, res) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';

  // Public-safe runtime visibility. Never log or return the key value.
  console.log('[Reality Verification] NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl || 'missing');
  console.log('[Reality Verification] NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY exists:', Boolean(publishableKey));

  const basePayload = {
    checkedAt: new Date().toISOString(),
    environment: process.env.VERCEL_ENV || 'unknown',
    supabaseUrl: supabaseUrl || null,
    publishableKeyExists: Boolean(publishableKey),
    clientCreated: false,
    healthCheck: {
      ok: false,
      status: null,
      endpoint: supabaseUrl ? `${supabaseUrl.replace(/\/$/, '')}/rest/v1/` : null
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

  const healthEndpoint = `${supabaseUrl.replace(/\/$/, '')}/rest/v1/`;

  try {
    const response = await fetch(healthEndpoint, {
      method: 'GET',
      headers: {
        apikey: publishableKey,
        Accept: 'application/json'
      }
    });

    const verified = response.ok;

    return jsonResponse(res, 200, {
      ...basePayload,
      clientCreated: Boolean(client),
      healthCheck: {
        ok: verified,
        status: response.status,
        endpoint: healthEndpoint,
        authorizationHeaderSent: false,
        apikeyHeaderSent: true
      },
      realityVerified: verified,
      status: verified ? 'connected' : 'failed',
      message: verified
        ? 'Reality Verified: Supabase env vars are readable, client was created, and REST endpoint responded successfully.'
        : `Supabase REST endpoint responded with ${response.status}. Check URL, publishable key, and project status.`
    });
  } catch (error) {
    return jsonResponse(res, 200, {
      ...basePayload,
      clientCreated: Boolean(client),
      healthCheck: {
        ok: false,
        status: null,
        endpoint: healthEndpoint,
        authorizationHeaderSent: false,
        apikeyHeaderSent: true
      },
      message: `Supabase health check failed: ${error.message}`
    });
  }
}

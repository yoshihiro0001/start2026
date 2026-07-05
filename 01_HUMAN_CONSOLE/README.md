# CEO Console

CEO Console is the command screen for the Human.

It is not a Developer Dashboard.
It is the first screen the Human opens to understand:

- where the work is now
- what the Human should do now
- what information is missing
- where to preview artifacts
- what is blocking progress

## Open Locally

Open this file in a browser:

```text
01_HUMAN_CONSOLE/index.html
```

## Smartphone Preview

For local smartphone preview, run:

```bash
cd "/Users/kashiharayoshihiro/Library/Mobile Documents/com~apple~CloudDocs/system/Evolution Factory/01_HUMAN_CONSOLE"
python3 -m http.server 8081 --bind 0.0.0.0
ipconfig getifaddr en0
```

Then open this on an iPhone connected to the same Wi-Fi:

```text
http://<Mac LAN IP>:8081/index.html
```

## Current Role

This is the minimum prototype for reducing CEO decision load.
The next improvement is stable smartphone preview delivery.

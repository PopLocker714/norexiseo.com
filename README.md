# NorexiSEO — Landing Page

Single-page corporate landing for NorexiSEO (SEO services, US market).
Stack: **bun** + **Tailwind CSS v4** + `Bun.serve` static server.

## Local development

```bash
bun install
bun run build     # compile Tailwind → public/styles.css
bun run start     # serve on http://localhost:3000 (PORT env to override)
```

Or watch mode: `bun run dev`

## Deploy (docker-compose)

```bash
docker compose up -d --build
# site on http://<host>:8080  (override with HOST_PORT=... )
```

Container serves on internal port 3000 with a `/health` healthcheck —
point Dokploy / any reverse proxy for `norexiseo.com` at service `web:3000`.

## Contact

company@norexiseo.com · https://norexiseo.com

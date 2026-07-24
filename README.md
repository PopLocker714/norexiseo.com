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
# site on http://<host>:8973
# port busy? pick any free one:
HOST_PORT=9021 docker compose up -d
```

Container serves on internal port 3000 with a `/health` healthcheck.

### Dokploy

Cleanest setup — no host port at all:

1. Delete the `ports:` block from `docker-compose.yml` (Traefik talks to the
   container directly, nothing to collide with).
2. In Dokploy UI → your compose project → **Domains**: add `norexiseo.com`,
   service `web`, port `3000`.
3. Redeploy.

If you keep `ports:`, set the `HOST_PORT` env var in Dokploy to a port that is
free on the server.

## Contact

company@norexiseo.com · https://norexiseo.com

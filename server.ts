import { join, normalize } from "node:path";

const PORT = Number(process.env.PORT ?? 3000);
const PUBLIC_DIR = join(import.meta.dir, "public");

const MIME_FALLBACK = "application/octet-stream";

Bun.serve({
  port: PORT,
  hostname: "0.0.0.0",
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/health") {
      return new Response("ok", { status: 200 });
    }

    const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
    const resolved = normalize(join(PUBLIC_DIR, pathname));

    // Path-traversal guard: resolved path must stay inside public/
    if (!resolved.startsWith(PUBLIC_DIR)) {
      return new Response("Forbidden", { status: 403 });
    }

    const file = Bun.file(resolved);
    if (await file.exists()) {
      return new Response(file, {
        headers: { "Content-Type": file.type || MIME_FALLBACK },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`NorexiSEO landing listening on http://localhost:${PORT}`);

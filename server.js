import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { basename, join } from "https://deno.land/std@0.140.0/path/mod.ts";

async function serveFile(path, contentType) {
  return new Response(await Deno.readFile(path), {
    headers: {
      "content-type": contentType,
    },
  });
}

async function serveHtml(path) {
  return serveFile(path, "text/html; charset=utf-8");
}

async function serveJs(path) {
  return serveFile(path, "text/javascript");
}

async function handleRequest(request) {
  const { pathname } = new URL(request.url);

  // Serve shell apps (better with glob)
  if (pathname === "/shell") {
    return serveHtml("./shell/dist/index.html");
  }

  // Serve MFE assets (better with glob)
  if (pathname.startsWith("/cdn/shell")) {
    return serveJs(join("./shell/dist", basename(pathname)));
  }

  if (pathname.startsWith("/cdn/remote")) {
    return serveJs(join("./remote/dist", basename(pathname)));
  }
}

serve(handleRequest);

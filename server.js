import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { basename, join } from "https://deno.land/std@0.140.0/path/mod.ts";
import { serveFile } from "https://deno.land/std@0.140.0/http/file_server.ts";

async function handleRequest(request) {
  const { pathname } = new URL(request.url);

  // Serve shell apps
  if (pathname === "/shell") {
    return serveFile(request, "./shell/dist/index.html");
  }

  // Serve MFE assets and future versioning (better with glob)
  if (pathname.startsWith("/cdn/shell")) {
    return serveFile(request, join("./shell/dist", basename(pathname)));
  }

  if (pathname.startsWith("/cdn/remote")) {
    console.log("constructed path", join("./remote/dist", basename(pathname)));
    return serveFile(request, join("./remote/dist", basename(pathname)));
  }
}

serve(handleRequest);

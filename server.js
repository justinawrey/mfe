import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import {
  serveFile,
  serveDir,
} from "https://deno.land/std@0.140.0/http/file_server.ts";

async function handleRequest(request) {
  const { pathname } = new URL(request.url);

  // Serve shell apps
  if (pathname === "/shell") {
    return serveFile(request, "shell/dist/index.html");
  }

  // Serve MFE assets and future versioning
  if (pathname.startsWith("/cdn/shell")) {
    return serveDir(request, {
      fsRoot: "shell/dist",
      urlRoot: "cdn/shell",
    });
  }

  if (pathname.startsWith("/cdn/remote")) {
    return serveDir(request, {
      fsRoot: "remote/dist",
      urlRoot: "cdn/shell",
    });
  }

  return new Response("invalid path");
}

serve(handleRequest);

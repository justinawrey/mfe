import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

async function handleRequest(request) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/cdn/remote@latest")) {
    return new Response(
      await Deno.readFile("./remote/dist/assets/remoteEntry.js"),
      {
        headers: { "content-type": "text/javascript" },
      }
    );
  }

  // If we're not asking for MFEs, serve shell html
  return new Response(await Deno.readFile("./shell/dist/index.html"), {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

serve(handleRequest);

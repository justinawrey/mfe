import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

async function handleRequest(request) {
  const { pathname } = new URL(request.url);
  console.log(pathname);
  return new Response("ok");
}

serve(handleRequest);

import { serve } from "https://deno.land/std@0.114.0/http/server.js";

async function handleRequest(request) {
  const { pathname } = new URL(request.url);
  console.log("pathname", pathname);
  return new Response("ok");
}

serve(handleRequest);

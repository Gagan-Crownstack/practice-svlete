import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname.startsWith("/dashboard")) {
    const token = event.cookies.get("jwt");
    if (!token || token !== "valid-token") {
      return Response.redirect("/", 303);
    }
  }
  return resolve(event);
};

// src/routes/api/login/+server.ts
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request, cookies }) => {
  const { username, password } = await request.json();
  if (username === "admin" && password === "admin") {
    cookies.set("jwt", "valid-token", {
      path: "/",
      httpOnly: true,
    });
    return new Response(null, { status: 200 });
  }
  return new Response(null, { status: 401 });
};

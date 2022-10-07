import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async (request) => {
    return new Response(request.params.uid, {
        status: 200
    });
}
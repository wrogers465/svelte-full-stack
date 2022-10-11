import type { RequestHandler } from "@sveltejs/kit";
import { api } from "../../_api/+server";

export const POST: RequestHandler = async (event) => {
    if (event.url.searchParams.has('deleteTodo')) {
        return api(event, "DELETE");
    }

    return new Response("Server error", {
        status: 404
    });
}
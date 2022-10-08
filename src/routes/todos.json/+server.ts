import type { RequestHandler } from "@sveltejs/kit";
import { api } from "../_api/+server" 


export const GET: RequestHandler = ({ request }) => {
    return api(request);
}

export const POST: RequestHandler = ({ request }) => {
    return api(request);
}
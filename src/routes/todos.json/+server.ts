import type { RequestHandler } from "@sveltejs/kit";
import { api } from "../_api/+server" 


export const GET: RequestHandler = (event) => {
    return api(event);
}

export const POST: RequestHandler = (event) => {
    return api(event);
}
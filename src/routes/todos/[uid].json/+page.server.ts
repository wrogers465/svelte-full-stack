import type { RequestHandler } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";
import { api } from "../../_api/+server"

export const actions: Actions = {
    deleteTodo: async (event) => {
        let response = await api(event, "DELETE");
        console.log(response);
        return response;
    }
}
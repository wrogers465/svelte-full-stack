import type { Actions } from "@sveltejs/kit";
import { api } from "./_api/+server";

export const actions: Actions = {
    deleteTodo: (event) => {
        api(event, "DELETE");
    }
}
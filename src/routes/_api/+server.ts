import type { RequestEvent } from "@sveltejs/kit";

let todos: Todo[] = [];

export const api = async (requestEvent: RequestEvent, overrideMethod?: String) => {
    let body = {};
    let status = 500;
    let method = overrideMethod ?? requestEvent.request.method;

    switch (method.toUpperCase()) {
        case "GET":
            body = todos;
            status = 200;
            break;
        case "POST":
            const form = await requestEvent.request.formData();
            const todoItem = form.get("text");

            todos.push({
                uid: Date.now().toString(),
                created_at: new Date(),
                text: form.get("text"),
                done: false
            });
            body = todos;
            status = 303;
            break;
        case "DELETE":
            status = 303;
            body = todos;
            console.log("Deletion just occurred.");
            break;          

        default:
            break;
    }
    
    return new Response(JSON.stringify(body), {
        status: status,
        headers: {
            location: "/"
        }
    });
}

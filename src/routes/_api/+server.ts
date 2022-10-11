import type { RequestEvent } from "@sveltejs/kit";

let todos: Todo[] = [];

export const api = async (requestEvent: RequestEvent, overrideMethod?: String) => {
    let body = {};
    let status = 500;
    let method = overrideMethod ?? requestEvent.request.method;

    switch (method.toUpperCase()) {
        case "GET":
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
            status = 303;
            break;
        case "DELETE":
            todos = todos.filter(todo => todo.uid !== requestEvent.params.uid)
            status = 303;
            break;          
        default:
            break;
    }
    
    body = todos;
    return new Response(JSON.stringify(todos), {
        status: status,
        headers: {
            location: "/"
        }
    });
}

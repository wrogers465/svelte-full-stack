import type { RequestHandler } from "@sveltejs/kit";

let todos: Todo[] = [];

export const api = async (request: Request) => {
    let body = {};
    let status = 500;

    switch (request.method.toUpperCase()) {
        case "GET":
            body = todos;
            status = 200;
            break;
        case "POST":
            const form = await request.formData();
            const todoItem = form.get("text");

            todos.push({
                created_at: new Date(),
                text: form.get("text"),
                done: false
            });
            body = todos;
            status = 303;           

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

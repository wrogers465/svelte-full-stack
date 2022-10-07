import type { RequestHandler } from "@sveltejs/kit";


//TODO: Persist in database
let todos: Todo[] = [];

export const GET: RequestHandler = async () => {
    return new Response(JSON.stringify(todos), {
        status: 200,
    });
}

export const POST: RequestHandler = async ({ request }) => {
    const form = await request.formData();
    const todoItem = form.get("text");

    todos.push({
        created_at: new Date(),
        text: form.get("text"),
        done: false
    });
    console.log(todos);
    return new Response(JSON.stringify(todos), {
        status: 303,
        headers: {
            location: "/"
        }
    });
}
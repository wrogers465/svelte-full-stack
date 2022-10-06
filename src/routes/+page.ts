import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch("./todos.json");

    if (res.ok) {
        const todos = await res.json();
        return {
            todos: todos
        }
    }

    const { message } = await res.json();
    return {
        error: new Error(message)
    }
}


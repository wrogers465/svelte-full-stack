/// <reference types="@sveletejs/kit" />

type Todo = {
    created_at: Date;
    text: ?FormDataEntryValue;
    done: boolean;
}
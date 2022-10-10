/// <reference types="@sveletejs/kit" />

type Todo = {
    uid: String,
    created_at: Date;
    text: ?FormDataEntryValue;
    done: boolean;
}
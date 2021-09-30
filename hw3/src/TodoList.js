import React from "react";
import Todo from "./Todo"

export default function TodoList({todos = []}) {
    // Test data
    todos[0] = {
        title: "test 1",
        content: "this is a test"
    }
    todos[1] = {
        title: "test 2",
        content: "this is a test"
    }
    todos[2] = {
        title: "test 3",
        content: "this is a test"
    }
    // ------------
    return(
        <div>
            {todos.map((t, i) => <Todo {...t} key={'todo-' + i} />)}
        </div>
    )
}
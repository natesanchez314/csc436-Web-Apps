import React from "react";
import Todo from "./Todo"

export default function TodoList({todos = [], completed = [], dispatchTodo}) {
    return(
        <div>
            <h2>Todo</h2>
            {todos.map((t, i) => <Todo {...t} key={'todo-' + i} dispatch={dispatchTodo} />)}
            <h2>Completed</h2>
            {completed.map((t, i) => <Todo {...t} key={'completed-' + i} dispatch={dispatchTodo}/>)}
        </div>
    )
}
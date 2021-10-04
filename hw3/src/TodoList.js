import React from "react";
import Todo from "./Todo"

export default function TodoList({todos = [], dispatchTodo}) {
    console.log(todos)
    let notCompleted = todos.filter((t) => t.completed === false)
    let isCompleted = todos.filter((t) => t.completed === true)
    //console.log(notCompleted)
    //console.log(isCompleted)
    return(
        <div>
            <h2>Todo</h2>
            {todos.map((t, i) => <Todo {...t} key={'todo-' + i} dispatch={dispatchTodo} />)}
            <h2>Completed</h2>
            {todos.map((t, i) => <Todo {...t} key={'completed-' + i} dispatch={dispatchTodo}/>)}
        </div>
    )
}
import React from "react";
import Todo from "./Todo"

export default function TodoList({todos = [], dispatchTodo}) {
    let completedTodos = todos.filter((t) => t.isComplete === false)
    let incompletedTodos = todos.filter((t) => t.isComplete === true)
    return(
        <div>
            <h2>Todo</h2>
            {completedTodos.map((t, i) => <Todo {...t} key={'todo-' + i} dispatch={dispatchTodo} />)}
            <h2>Completed</h2>
            {incompletedTodos.map((t, i) => <Todo {...t} key={'completed-' + i} dispatch={dispatchTodo}/>)}
        </div>
    )
}
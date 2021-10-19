import React, { useContext } from "react";
import Todo from "./Todo"
import { StateContext } from './context'

export default function TodoList() {
    const {state} = useContext(StateContext)
    const {todos} = state
    return(
        <div>
            <h2>Todo</h2>
            {todos.map((t, i) => <Todo {...t} todoId={i} />)}
        </div>
    )
}
import React, { useContext } from "react";
import Todo from "./Todo"
import { StateContext } from './context'

export default function TodoList() {
    const {state} = useContext(StateContext)
    const {todos} = state
    console.log("here")
    console.log(todos)
    return(
        <div>
            <h2>Todo</h2>
            {todos.map((t, i) => <Todo {...t} key={'todo-' + i} />)}
        </div>
    )
}
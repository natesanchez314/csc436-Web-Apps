import React from "react";

export default function Todo({title, content}) {
    var completed = false
    const dateCreated = Date(Date.now())
    var dateCompleted = null
    function completeTodo() {
        completed = true
    }
    return(
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Date created: {dateCreated}</p>
            <input type="checkbox" checked={completed} onChange={completeTodo}/>
            <label>dateCompleted: {dateCompleted}</label>
        </div>
    )
}
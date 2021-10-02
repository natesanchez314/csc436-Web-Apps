import React, { useState } from "react";

export default function Todo({title, content, dateCreated, dispatch}) {
    const [completed, toggle] = useState('')
    var dateCompleted = null
    function toggleTodo() {
        toggle(!completed)
        dateCompleted = Date(Date.now())
        dispatch({type: "TOGGLE"})
    }
    function delTodo() {
        dispatch({type: "DELETE"})
    }
    return(
        <div>
            <input type="checkbox" value={completed} checked={completed} onChange={toggleTodo} />
            <label><b><big>{title}</big></b></label>
            <p>{content}</p>
            <p>Date created: {dateCreated}</p>
            {dateCompleted && <label>dateCompleted: {dateCompleted}</label>}
            <button onClick={delTodo}>Delete</button>
            <br/><br/>
        </div>
    )
}
import React, { useState } from "react";

export default function Todo({title, content, dateCreated, index, dispatch}) {
    const [completed, toggle] = useState('')
    var dateCompleted = null
    function toggleTodo() {
        toggle(!completed)
        dateCompleted = Date(Date.now())
        dispatch({type: "TOGGLE", index: index})
    }
    function delTodo() {
        dispatch({type: "DELETE", index: index})
    }
    return(
        <div>
            <input type="checkbox" value={completed} checked={completed} onChange={toggleTodo} />
            <label><b><big>{title}</big></b></label>
            <label>{index}</label>
            <p>{content}</p>
            <p>Date created: {dateCreated}</p>
            {dateCompleted && <label>dateCompleted: {dateCompleted}</label>}
            <button onClick={delTodo}>Delete</button>
            <br/><br/>
        </div>
    )
}
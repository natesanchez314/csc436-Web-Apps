import React, { useState } from "react";

export default function Todo({title, content, dateCreated, index, isComplete, dispatch}) {
    const [dateCompleted, toggleCompletionDate] = useState(null)
    // index is actually flipped to what the index in the todolist array actually is
    function toggleTodo() {
        toggleCompletionDate(Date(Date.now()))
        dispatch({type: "TOGGLE", index: index, completionStatus: !isComplete})
    }
    function delTodo() {
        dispatch({type: "DELETE", index: index})
    }
    return(
        <div>
            <input type="checkbox" checked={isComplete} onChange={toggleTodo} />
            <label><b><big>{title}</big></b></label>
            <p>{content}</p>
            <p>Date created: {dateCreated}</p>
            {dateCompleted && <label>dateCompleted: {dateCompleted}</label>}
            <br/>
            <button onClick={delTodo}>Delete</button>
            <br/><br/>
        </div>
    )
}
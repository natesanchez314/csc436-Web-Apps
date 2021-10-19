import React, { useContext } from "react";
import { StateContext } from "./context";

export default function Todo({title, content, dateCreated, isComplete, dateCompleted, todoId}) {
    const {dispatch} = useContext(StateContext)
    console.log(isComplete)
    return(
        <div>
            <input type="checkbox" onClick={() => dispatch({type: "TOGGLE", completionStatus: !isComplete, todoId: todoId})} /> 
            <label><b><big>{title}</big></b></label>
            <p>{content}</p>
            <p>Date created: {new Date(dateCreated).toLocaleDateString('en-us')}</p>
            {dateCompleted && <label>Date completed: {new Date(dateCompleted).toLocaleDateString('en-us')}</label>}
            <br/>
            <button onClick={() => dispatch({type: "DELETE", todoId: todoId})}>Delete</button>
            <br/><br/>
        </div>
    )
}
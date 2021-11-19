import React, { useContext, useEffect } from "react";
import { StateContext } from "./context";
import { useResource } from "react-request-hook";

import { Card, Button } from "react-bootstrap";

export default function Todo({title, content, dateCreated, isComplete, dateCompleted, id}) {
    //console.log(id)
    //console.log(isComplete)
    const {dispatch} = useContext(StateContext)
    const [ todoToDel, deleteTodo ] = useResource(() => ({
        url: `/todos/${id}`,
        method: 'delete'
    }))
    const [ todoToToggle, toggleTodo ] = useResource(() => ({
        url: `/todos/${id}`,
        method: 'patch',
        data: { "isComplete": !isComplete, "dateCompleted": Date.now() }
    }))
    function handleDelete() {
        deleteTodo()
    }
    function handleToggle() {
        toggleTodo()
    }
    useEffect(() => {
        if (todoToDel && todoToDel.data) {
            dispatch({type: "DELETE", todoId: id})
        }
    }, [todoToDel])
    useEffect(() => {
        if (todoToToggle && todoToToggle.data) {
            dispatch({type: "TOGGLE", isComplete: todoToToggle.data.isComplete, todoId: id, dateCompleted: todoToToggle.data.dateCompleted})
        }
    }, [todoToToggle])

    return(
        <Card>
        <Card.Body>
            <Card.Title><input type="checkbox" checked={isComplete} onClick={handleToggle} /> {title}</Card.Title>
            <Card.Text>{content}</Card.Text>
            <p>Date created: {new Date(dateCreated).toLocaleDateString('en-us')}</p>
            {dateCompleted && <label>Date completed: {new Date(dateCompleted).toLocaleDateString('en-us')}</label>}
            {dateCompleted && <br/>}
            <Button onClick={handleDelete}>Delete</Button>
            <br/><br/>
        </Card.Body>
        </Card>
    )
}
import React, { useContext, useEffect, useState } from "react"
import { StateContext } from "./context"
import { useResource } from 'react-request-hook'

export default function CreateTodo() {

    const {dispatch} = useContext(StateContext)
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    const isComplete = false
    const dateCompleted = null
    const [ todo, createTodo ] = useResource(({ title, content, dateCreated, isComplete, dateCompleted }) => ({
        url: '/todos',
        method: 'post',
        data: { title, content, dateCreated, isComplete, dateCompleted }
    }))

    const dateCreated = Date(Date.now())
    function handleTitle(e) { setTitle(e.target.value) }
    function handleContent(e) { setContent(e.target.value) }
    function clearForm() { setTitle(''); setContent('') }
    function handleCreate() {
        createTodo({ title, content, dateCreated, isComplete, dateCompleted })
        clearForm()
    }
    useEffect(() => {
        if (todo && todo.data) {
            dispatch({
                type: "CREATE",
                title: todo.data.title,
                content: todo.data.content,
                dateCreated: todo.data.dateCreated,
                todoId: todo.data.id
            })
        }
    }, [todo])

    return (
        <form onSubmit={
            e => {
                e.preventDefault()
                handleCreate()
            }}>
            <h3>Add new todo</h3>
            <div>
                <label htmlFor="create-title">Title: </label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
            </div>
            <br/>
            <textarea value={content} onChange={handleContent}/>
            <br/>
            <input type="submit" value="Submit" disabled={title.length === 0} />
        </form>
    )
}
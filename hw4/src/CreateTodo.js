import React, { useContext, useState } from "react";
import { StateContext } from "./context";

export default function CreateTodo() {
    const {dispatch} = useContext(StateContext)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dateCreated = Date(Date.now())
    function handleTitle(e) { setTitle(e.target.value) }
    function handleContent(e) { setContent(e.target.value) }
    function clearForm() { setTitle(''); setContent('') }
    return (
        <form onSubmit={
            e => {
                e.preventDefault()
                dispatch({ type: "CREATE", title, content, dateCreated })
                clearForm()
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
import React from "react";

export default function CreateTodo({user}) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <h3>Add new todo</h3>
            <div>
                <label htmlFor="create-title">Title: </label>
                <input type="text" name="create-title" id="create-title" />
            </div>
            <br/>
            <textarea/>
        </form>
    )
}
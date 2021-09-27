import React from "react";

export default function Todo({title, content, author}) {
    return(
        <div>
            <h2>Title</h2>
            <p>Description</p>
            <p>Date Created</p>
            <p>Complete: initially set to false</p>
            <p>dateCompleted: dynamically set</p>
        </div>
    )
}
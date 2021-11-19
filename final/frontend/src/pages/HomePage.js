import React, { useContext } from 'react'
import TodoList from '../TodoList'
import { StateContext } from '../context'

export default function HomePage() {

    const {state} = useContext(StateContext)
    const {user} = state

    return (
        <div>
            {user && <TodoList />}
        </div>
    )
}
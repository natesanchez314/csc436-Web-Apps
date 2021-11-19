import React, { useContext } from 'react'
import TodoList from '../TodoList'
import { StateContext } from '../context';

export default function ProfilePage({id}) {

    const {state} = useContext(StateContext)
    const {user} = state;

    return (
        <TodoList />
    )
}
import React, { useState, useReducer } from 'react'
import UserBar from "./User/UserBar"
import TodoList from "./TodoList"
import CreateTodo from "./CreateTodo";
import appReducer from './reducer';

function App() {
  const [ state, dispatchUser ] = useReducer(appReducer, {
    user: ''
  })
  const { user, todos } = state
  return (
    <div>
      <UserBar user={user} dispatchUser={dispatchUser} />
      <CreateTodo />
      <TodoList />
    </div>
  )
}

export default App;
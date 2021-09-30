import React, { useState, useReducer, useEffect } from 'react'
import UserBar from "./User/UserBar"
import TodoList from "./TodoList"
import CreateTodo from "./CreateTodo";
import appReducer from './reducer';

const initTodos = [
  /* {
    title: "test 1",
    content: "this is a test"
  },
  {
    title: "test 2",
    content: "this is a test"
  },
  {
    title: "test 3",
    content: "this is a test"
  } */
]

function App() {
  const [ state, dispatch ] = useReducer(appReducer, {
    user: '',
    todos: initTodos
  })
  const { user, todos } = state
  return (
    <div>
      <UserBar user={user} dispatch={dispatch} />
      {user && <CreateTodo dispatch={dispatch} />}
      <TodoList todos={todos}/>
    </div>
  )
}

export default App;
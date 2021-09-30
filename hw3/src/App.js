import React, { useState, useReducer, useEffect } from 'react'
import UserBar from "./User/UserBar"
import TodoList from "./TodoList"
import CreateTodo from "./CreateTodo";
import appReducer from './reducer';

const initTodos = [
  {
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
  }
]
const initCompleted = [
  {
    title: "test 4",
    content: "this is a test"
  }
]

function App() {
  const [ state, dispatch ] = useReducer(appReducer, {
    user: '',
    todos: initTodos,
    completed: initCompleted
  })
  const { user, todos, completed } = state
  return (
    <div>
      <UserBar user={user} dispatch={dispatch} />
      {user && 
        <div>
        <CreateTodo dispatch={dispatch} />
        <TodoList todos={todos} completed={completed} dispatchTodo={dispatch}/>
        </div> 
      }
    </div>
  )
}

export default App;
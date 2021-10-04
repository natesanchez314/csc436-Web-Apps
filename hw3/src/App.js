import React, { useState, useReducer, useEffect } from 'react'
import UserBar from "./User/UserBar"
import TodoList from "./TodoList"
import CreateTodo from "./CreateTodo";
import appReducer from './reducer';

var initIndex = 1

function App() {
  const [ state, dispatch ] = useReducer(appReducer, {
    user: '',
    todos: [],
  })
  const { user, todos } = state
  //console.log(todos)
  //console.log(index)
  return (
    <div>
      <UserBar user={user} dispatch={dispatch} />
      {user && 
        <div>
        <CreateTodo index={todos.length} dispatch={dispatch} />
        <TodoList todos={todos} dispatchTodo={dispatch}/>
        </div> 
      }
    </div>
  )
}

export default App;
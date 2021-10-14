import React, { useReducer } from 'react'
import UserBar from "./User/UserBar"
import TodoList from "./TodoList"
import CreateTodo from "./CreateTodo";
import appReducer from './reducer';

function App() {
  const [ state, dispatch ] = useReducer(appReducer, {
    user: '',
    todos: []
  })
  const { user, todos } = state
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
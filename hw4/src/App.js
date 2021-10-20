import React, { useEffect, useReducer } from 'react'
import { useResource } from 'react-request-hook'
import UserBar from "./User/UserBar"
import TodoList from "./TodoList"
import CreateTodo from "./CreateTodo";
import appReducer from './reducer';
import { StateContext } from './context';

function App() {

  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  const [ state, dispatch ] = useReducer(appReducer, {
    user: '',
    todos: [],
    completed: []
  })

  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: 'FETCH_TODOS', todos: todos.data })
    }
  }, [todos]) 
 
  const { user } = state

  return (
    <div>
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
        <UserBar />
        {user && 
          <div>
          <CreateTodo />
          <TodoList />
          </div> 
        }
      </StateContext.Provider>
    </div>
  )
}

export default App;
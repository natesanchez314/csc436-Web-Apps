import React, { useEffect, useReducer } from 'react'
import { useResource } from 'react-request-hook'
import UserBar from "./User/UserBar"
import TodoList from "./TodoList"
import CreateTodo from "./CreateTodo";
import appReducer from './reducer';
import { StateContext } from './context';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  const [ state, dispatch ] = useReducer(appReducer, {
    user: '',
    todos: []
  })

  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: 'FETCH_TODOS', todos: todos.data.reverse() })
    }
  }, [todos]) 
 
  const { user } = state

  return (
    <div>
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
        <Container>
          <UserBar />
          {user && 
            <div>
            <CreateTodo />
            <TodoList />
            </div> 
          }
        </Container>
      </StateContext.Provider>
    </div>
  )
}

export default App;
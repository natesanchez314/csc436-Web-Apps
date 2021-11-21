import React, { useReducer } from 'react'
import HeaderBar from "./HeaderBar";
import appReducer from './reducer';
import { StateContext } from './context';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage';
import ProfilePage from './pages/ProfilePage';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';

function App() {

  /* const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))
 */
  /* const [ todos, getTodos ] = useResource(() => ({
    url: '/users/userid',
    method: 'get'
  })) */

  const [ state, dispatch ] = useReducer(appReducer, {
    user: {},
    todos: [],
    users: []
  })

  /* useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: 'FETCH_TODOS', todos: todos.data.reverse() })
    }
  }, [todos])  */
 
  const { user } = state

  const myRoutes = mount({
    '/': route({ view: <HomePage />}),
    '/users': route({ view: <UsersPage />}),
    '/users/:userid': route(req => {
      return { view: <ProfilePage id={req.params.id} /> }
    })
  })

  return (
    <div>
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
        <Router routes={myRoutes}>
          <Container>
            <HeaderBar />
            <View />
          </Container>
        </Router>
      </StateContext.Provider>
    </div>
  )
}

export default App;

/*
<UserBar />
          {user && 
            <div>
            <CreateTodo />
            <TodoList />
            </div> 
          }
          */
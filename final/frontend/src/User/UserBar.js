import React, { useContext, useState } from 'react'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import { StateContext } from '../context'
import CreateTodo from '../CreateTodo'

import { Button } from 'react-bootstrap'

export default function UserBar() {
    const {state} = useContext(StateContext)
    const {user} = state

    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    if (user.username) {
        return <Logout />
    } else {
        return (
            <div>
                <Button variant="link" onClick={(e) => setShowLogin(true)}>Login</Button>
                <Login show={showLogin} handleClose={() => setShowLogin(false) }/>
                <Button variant="link" onClick={(e) => setShowRegister(true)}>Register</Button>
                <Register show={showRegister} handleClose={() => setShowRegister(false)}/>
            </div>
        )
    }
}

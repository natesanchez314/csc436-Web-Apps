import React, { useContext } from 'react'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import { StateContext } from '../context'

export default function UserBar() {
    const {state} = useContext(StateContext)
    if (state.user) {
        return <Logout />
    } else {
        return (
            <div>
                <h3>Login</h3>
                <Login />
                <h3>Register</h3>
                <Register />
            </div>
        )
    }
}

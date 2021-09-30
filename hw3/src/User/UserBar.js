import React from 'react'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

export default function UserBar({ user, dispatchUser}) {
    if (user) {
        return <Logout user={user} dispatchUser={dispatchUser} />
    } else {
        return (
            <div>
                <h3>Login</h3>
                <Login dispatchUser={dispatchUser} />
                <h3>Register</h3>
                <Register dispatchUser={dispatchUser} />
            </div>
        )
    }
}

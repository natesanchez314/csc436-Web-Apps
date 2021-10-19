import React, { useContext, useState } from "react";
import { StateContext } from "../context";

export default function Login() {
    const {dispatch} = useContext(StateContext)
    const [username, setUsername] = useState('')
    function handleUsername(e) { setUsername(e.target.value) }
    return (
        <form onSubmit={
            e => {
                e.preventDefault()
                dispatch({type:"LOGIN", username})
            }} >
            <label htmlFor="login-username">Username: </label>
            <input type="text" value={username} onChange={handleUsername} id="login-username" />
            <label htmlFor="login-password">Password: </label>
            <input type="password" name="login-pasword" id="login-password" />
            <input type="submit" value="Login" />
        </form>
    ) 
}
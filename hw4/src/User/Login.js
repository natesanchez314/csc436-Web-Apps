import React, { useState } from "react";

export default function Login({ dispatchUser }) {
    /* const [ formData, setFormData ] = useState({
        username: "",
        password: ""
    })
    return (
        <form onSubmit={e => {e.preventDefault(); dispatchUser({type:"LOGIN", username:formData.username})} }>
            <label htmlFor="login-username">Username: </label>
            <input type="text" value={formData.username} onChange={e => setFormData({
                ...formData,
                username: e.target.value
            })} name="login-username" id="login-username" />
            <label htmlFor="login-password">Password: </label>
            <input type="password" value={formData.password} onChange={e => setFormData({
                ...formData,
                password: e.target.value
            })} name="login-pasword" id="login-password" />
            <input type="submit" value="Login" disabled={formData.username.length === 0}/>
        </form>
    ) */
    const [username, setUsername] = useState('')
    function handleUsername(e) { setUsername(e.target.value) }
    return (
        <form onSubmit={e => {
                e.preventDefault()
                dispatchUser({type:"LOGIN", username})
            }} >
            <label htmlFor="login-username">Username: </label>
            <input type="text" value={username} onChange={handleUsername} id="login-username" />
            <label htmlFor="login-password">Password: </label>
            <input type="password" name="login-pasword" id="login-password" />
            <input type="submit" value="Login" />
        </form>
    ) 
}
import React, { useState } from 'react';

export default function Register({setUser}) {
    const [ formData, setFormData ] = useState({
        username: "",
        password: "",
        passwordRepeat: ""
    })
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="register-username">Username: </label>
            <input type="text" value={username} onChange={e => setFormData({...formaData, username: e.target.value})} name="register-username" id="register-username" />
            <label htmlFor="register-password">Password: </label>
            <input type="password" name="register-password" id="register-password" />
            <label htmlFor="register-password-repeat">Repeat password: </label>
            <input type="password" name="register-password-repeat" id="register-password-repeat" />
            <input type="submit" value="Register" disabled={username.length === 0}/>
        </form>
    )
}

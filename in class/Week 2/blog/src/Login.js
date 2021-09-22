import React from "react";

export default function Login() {
    return (
        <form onSubmit={evt => evt.preventDefault()}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" id="login-username" />
            <label htmlFor="login-password">Username:</label>
            <input type="password" name="login-pasword" id="login-password" />
            <input type="submit" name="login" value="Login"/>
        </form>
    )
}
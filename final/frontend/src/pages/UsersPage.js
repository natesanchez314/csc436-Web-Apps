import React, { useContext, useEffect, useState } from 'react'
import { useResource } from 'react-request-hook'
import { StateContext } from '../context'
import UserList from '../UserList'

export default function UsersPage () {

    const [ users, getUsers ] = useResource(() => ({
        url: '/users',
        method: 'get',
    }))

    useEffect(() => {
        getUsers()
    }, [users]) 

    useEffect(() => {
        if (users && users.isLoading === false && users.data) {
            dispatchEvent({ type: 'FETCH_USERS', users: users.data.users })
        }
    }, [users])

    return(
        <>
            <h2>Users</h2>
            {users && <UserList />}
        </>
    )
}
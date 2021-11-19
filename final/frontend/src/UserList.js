import React, { useEffect, useState } from "react"
import { useResource } from "react-request-hook"
import User from "./User"

export default function UserList() {

	const [ users, getUsers ] = useState([])
	
	useEffect(() => {
		getUsers()
	})

	return (
		<div>
			<h2>Users</h2>
			{users.map((u, i) => <User {...u} key={'user-' + i} />)}
		</div>
	)
}
import React from 'react'

const Header = ({ todos }) => (
	<div>
		<h1>TODO APP</h1>
		{todos.length > 0 ? (
			<p>Vous avez {todos.length} todo !</p>
		) : (
			<p>Vous n'avez pas de todo !</p>
		)}
	</div>
)

export default Header

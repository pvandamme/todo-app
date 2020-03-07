import React from 'react'

const Header = ({ todos }) => (
	<header>
		<a href="/">LOGIN</a>
		<h1>TODO</h1>
		{todos.length > 0 ? (
			<p>You have {todos.length} left !</p>
		) : (
			<p>You have no todo !</p>
		)}
	</header>
)

export default Header

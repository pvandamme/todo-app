import React from 'react'

const Todos = ({ todos }) => {
	return todos.map((todo) => (
		<div>
			<p>{todo.text}</p>
		</div>
	))
}

export default Todos

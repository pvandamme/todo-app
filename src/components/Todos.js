import React from 'react'

const Todos = ({ todos }) => {
	return todos.map((todo) => (
		<div key={todo.id}>
			<p>{todo.text}</p>
		</div>
	))
}

export default Todos

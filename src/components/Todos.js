import React from 'react'

const Todos = ({ todos, deleteTodo }) => {
	return todos.map((todo) => (
		<div key={todo.id} onClick={() => deleteTodo(todo.id)}>
			<p>{todo.text}</p>
		</div>
	))
}

export default Todos

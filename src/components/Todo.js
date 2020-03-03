import React from 'react'

const Todo = ({ todo, deleteTodo }) => {
	return (
		<div className="todos" onClick={() => deleteTodo(todo.id)}>
			<p>{todo.text}</p>
		</div>
	)
}

export default Todo

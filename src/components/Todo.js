import React from 'react'

const Todo = ({ todo, deleteTodo }) => {
	return (
		<div className="todo">
			<p className="todo__text round">{todo.text}</p>
			<p
				className={'delete round ' + todo.color}
				onClick={() => deleteTodo(todo.id)}>
				X
			</p>
		</div>
	)
}

export default Todo

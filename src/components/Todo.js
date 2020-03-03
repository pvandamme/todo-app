import React from 'react'

const Todo = ({ todo, deleteTodo }) => {
	return (
		<div className="todos">
			<input className="checkbox" type="checkbox" />
			<p className="todo" onClick={() => deleteTodo(todo.id)}>
				{todo.text}
			</p>
		</div>
	)
}

export default Todo

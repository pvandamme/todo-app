import React from 'react'

const AddTodo = ({ addTodo, handleError }) => {
	const handleSubmit = (e) => {
		const text = e.target.elements.todo.value.trim()
		e.preventDefault()

		if (text.length === 0) {
			return handleError()
		}
		e.target.elements.todo.value = ''
		addTodo(text)
	}
	return (
		<div className="add-todo">
			<form onSubmit={handleSubmit}>
				<input
					className="round"
					type="text"
					name="todo"
					placeholder="New todo..."
				/>
				<button className="round">Add Todo</button>
			</form>
			<hr />
		</div>
	)
}

export default AddTodo

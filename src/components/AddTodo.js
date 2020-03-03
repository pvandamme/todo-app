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
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="add-todo"
					type="text"
					name="todo"
					placeholder="Add a new todo..."
				/>
				<button>Add Todo</button>
			</form>
		</div>
	)
}

export default AddTodo

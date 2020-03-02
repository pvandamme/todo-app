import React from 'react'

const AddTodo = ({ addTodo }) => {
	const handleSubmit = (e) => {
		const text = e.target.elements.todo.value.trim()

		e.preventDefault()
		e.target.elements.todo.value = ''
		addTodo(text)
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
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

import React from 'react'

const AddTodo = ({ color, addTodo, handleError }) => {
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
					className="round"
					type="text"
					name="todo"
					placeholder="New todo..."
				/>
				<button className={'round ' + color}>Add Todo</button>
			</form>
		</div>
	)
}

export default AddTodo

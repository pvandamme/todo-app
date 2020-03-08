import React from 'react'

const AddTodo = ({ color, handleColorChange, addTodo, handleError }) => {
	const handleSubmit = (e) => {
		const text = e.target.elements.todo.value.trim()
		e.preventDefault()

		if (text.length === 0) {
			return handleError()
		}
		e.target.elements.todo.value = ''
		addTodo(text)
	}
	const handleChange = (e) => {
		handleColorChange(e.target.value)
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
				<button className={'round ' + color}>Add Todo</button>
			</form>
			<select className="round" onChange={handleChange}>
				<option value="blue">Blue</option>
				<option value="red">Red</option>
				<option value="green">Green</option>
			</select>
		</div>
	)
}

export default AddTodo

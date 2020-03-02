import React, { Component } from 'react'

export default class AddTodo extends Component {
	handleSubmit = (e) => {
		const text = e.target.elements.todo.value.trim()

		e.preventDefault()
		e.target.elements.todo.value = ''
		this.props.addTodo(text)
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
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
}

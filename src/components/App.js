import React, { Component } from 'react'
import '../styles/App.css'
import Header from './Header'
import Todos from './Todos'
import AddTodo from './AddTodo'
import SelectColor from './SelectColor'

export default class App extends Component {
	state = {
		todos: [],
		error: false,
		color: 'blue'
	}
	addTodo = (text) => {
		this.setState({
			todos: [
				...this.state.todos,
				{ id: Math.random(), text, color: this.state.color }
			],
			error: false
		})
	}
	deleteTodo = (id) => {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== id)
		})
	}
	handleError = () => {
		this.setState({ error: true })
	}
	handleColorChange = (color) => {
		this.setState({ color })
	}
	render() {
		return (
			<div className="container">
				<Header todos={this.state.todos} />
				<div class="add-todo">
					<AddTodo
						color={this.state.color}
						addTodo={this.addTodo}
						handleError={this.handleError}
					/>
					<SelectColor handleColorChange={this.handleColorChange} />
				</div>
				{this.state.error === true && (
					<p class="error">Error, you can't add an empty value !</p>
				)}
				<hr />
				{this.state.todos.length > 0 && (
					<Todos
						todos={this.state.todos}
						deleteTodo={this.deleteTodo}
					/>
				)}
			</div>
		)
	}
}

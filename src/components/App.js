import React, { Component } from 'react'
import '../styles/App.css'
import Header from './Header'
import Todos from './Todos'
import AddTodo from './AddTodo'

export default class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				text: 'yoooooooo'
			}
		],
		error: false
	}
	addTodo = (text) => {
		this.setState({
			todos: [...this.state.todos, { id: Math.random(), text }],
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
	render() {
		return (
			<div className="container">
				<Header todos={this.state.todos} />
				<AddTodo
					addTodo={this.addTodo}
					handleError={this.handleError}
				/>
				{this.state.error === true && (
					<p class="error">Error, you can't set an empty value !</p>
				)}
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

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
		]
	}
	addTodo = (text) => {
		this.setState({
			todos: [...this.state.todos, { id: Math.random(), text }]
		})
	}
	deleteTodo = (id) => {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== id)
		})
	}
	render() {
		return (
			<div className="container">
				<Header todos={this.state.todos} />
				<AddTodo addTodo={this.addTodo} deleteTodo={this.deleteTodo} />
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

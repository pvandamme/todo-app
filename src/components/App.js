import React, { Component } from 'react'
import '../styles/App.css'
import Header from './Header'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
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
	render() {
		return (
			<div>
				<Header todos={this.state.todos} />
				{this.state.todos.length > 0 && (
					<Todos todos={this.state.todos} />
				)}
				<AddTodo addTodo={this.addTodo} />
			</div>
		)
	}
}

export default App

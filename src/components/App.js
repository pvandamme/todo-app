import React, { Component } from 'react'
import '../styles/App.css'
import Header from './Header'
import Todos from './Todos'

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				text: 'yoooooooo'
			}
		]
	}
	render() {
		return (
			<div>
				<Header todos={this.state.todos} />
				{this.state.todos.length > 0 && (
					<Todos todos={this.state.todos} />
				)}
			</div>
		)
	}
}

export default App

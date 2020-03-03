import React from 'react'
import Todo from './Todo'

const Todos = ({ todos, deleteTodo }) =>
	todos.map((todo) => (
		<Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
	))

export default Todos

import React from 'react';

import Todo from './Todo';

const todoList = (props) => {
    let todos = [];
    if (props.filter === 'all') {
        todos = props.todos
    } else if (props.filter === 'completed') {
        todos = props.todos.filter((todo) => todo.completed)
    } else if (props.filter === 'incomplete') {
        todos = props.todos.filter((todo) => !todo.completed)
    }
            
   
    return (
        <div>
            {/* Render todo */}
            {todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} toggleComplete={props.onComplete} toggleDelete={props.onDelete} />
            })}
        </div>
    )
}

export default todoList;
// TodoList: Controller
// maps todos & render Todo

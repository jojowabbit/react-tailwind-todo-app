import React from 'react';


import TodoInput from '../Todo/TodoInput';
import TodoList from '../Todo/TodoList';

export default class TodoContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            filter: 'all'
        }
    }
    // componentdidmount, load & setstate state from local storage
    componentDidMount() {
        const todosJson = localStorage.getItem('todos');
        this.setState({
            todos: JSON.parse(todosJson)
        })
    }

    saveTodo = () => {
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }

    addTodo = (todo) => {
        const newTodo = [todo, ...this.state.todos];
        this.setState({
            todos: newTodo
        }, () => this.saveTodo())
        
    }

    toggleComplete = (id) => {
       this.setState({
           todos: this.state.todos.map((todo) => {
               if (todo.id === id) {
                   return {
                       ...todo,
                       completed: !todo.completed
                   }
               }
               else {
                   return todo
               }
           })
       }, () => this.saveTodo())
    }

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== id)
        }, () => this.saveTodo())
    }

    filterTodo = (type) => {
        this.setState({
            filter: type
        })
    }
    completeAll = () => {
        this.setState({
            todos: this.state.todos.map((todo) => ({...todo, completed: !this.state.completed}))
        }, () => this.saveTodo())
    }

    deleteCompleted = () => {
        this.setState({
            todos: this.state.todos.filter((todo) => !todo.completed)
        }, () => this.saveTodo())
    }

    render() {
        return(
            <div className="w-3/4 h-full p-6 mt-6 bg-pink-600 border-2 rounded-md">
                <TodoInput onFilter={this.filterTodo} onSubmit={this.addTodo} />

                {/* Display numbers of todo left */}
                <h6 className="font-semibold">You have <span className="text-yellow-400">{this.state.todos.filter((todo) => !todo.completed).length}</span> todo left</h6>

                <TodoList filter={this.state.filter} todos={this.state.todos} onComplete={this.toggleComplete} onDelete={this.deleteTodo} onFilter={this.filterTodo} />
                <div className="flex justify-around items-center py-2 mt-2">
                <button onClick={this.completeAll} className="w-48 py-2 bg-green-400 border-2 rounded-md">Complete All</button>
                <button onClick={this.deleteCompleted} className="w-48 py-2 bg-red-400 border-2 rounded-md">Delete Completed</button>
                </div>
            </div>
        )
    }
};










//Wrapper For Todo App
//Control State with Class Component
// 1. todos []
// 2. handleChange
// 3. handleSubmit
// 4. addTodo
// 5. deleteTodo


// Form
// 1. Input
// 2. Add Button

// TodoList
// maps todos & render Todo

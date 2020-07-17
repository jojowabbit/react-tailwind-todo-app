import React from 'react';
import { v4 as uuidv4 } from 'uuid';


export default class TodoInput extends React.Component {
    initialState = {
        text: '',
        filter: 'all'
    }
    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        }, () => this.props.onFilter(this.state.filter));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.text.length > 0) {
            this.props.onSubmit({
                text: this.state.text,
                completed: false,
                id: uuidv4()
            });
            this.setState(this.initialState)
        }
    }

    render () {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="flex justify-around">
                    <input name="text" value={this.state.text} onChange={this.handleChange} placeholder="todo..." className='w-full px-4 rounded-full text-gray-900' />
                    <button onClick={this.handleSubmit} className="mr-auto px-4 py-1 ml-4 bg-pink-400 hover:bg-pink-500 border-2 rounded-md">Add</button>
                </div>
                <div className="flex flex-wrap justify-around items-center py-2">
                    <p>Filter by:</p>
                    <label>
                            <input checked={this.state.filter === 'all'} value='all' onChange={this.handleChange}  name="filter" type="radio" /> All
                    </label>
                    <label>
                        <input checked={this.state.filter === 'incomplete'} value='incomplete' onChange={this.handleChange}  name="filter" type="radio" /> Incomplete
                    </label>
                    <label>
                        <input checked={this.state.filter === 'completed'} value='completed' onChange={this.handleChange}  name="filter" type="radio" /> Completed
                    </label>
                </div>
            </form>
        )
    }
};

// Form
// 1. Input
// 2. Add Button
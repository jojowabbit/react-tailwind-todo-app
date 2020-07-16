import React from 'react';

export default (props) => {
    return (
        <div className="flex justify-between items-center mt-2 px-4 py-2 bg-pink-200 text-gray-900 rounded-md">
           <div onClick={() => props.toggleComplete(props.todo.id)} className={props.todo.completed ? 'line-through' : '' }>{props.todo.text}</div>
           <button onClick={() => props.toggleDelete(props.todo.id)} className="flex justify-center items-center px-2 border-2 rounded-full">X</button>
        </div>
    )
};


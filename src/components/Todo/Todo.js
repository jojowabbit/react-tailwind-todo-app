import React from 'react';

export default (props) => {
    return (
        <div className="flex justify-between items-center mt-2 px-4 py-2 bg-pink-100 hover:bg-pink-200 text-pink-900 rounded-md">
           <div onClick={() => props.toggleComplete(props.todo.id)} className={props.todo.completed ? 'line-through' : '' }>{props.todo.text}</div>
           <button onClick={() => props.toggleDelete(props.todo.id)} className="font-bold text-red-400 hover:text-red-500">X</button>
        </div>
    )
};


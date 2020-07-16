import React from 'react';

import TodoContainer from './components/Todo/TodoContainer';
import './styles/main.css'

export default class App extends React.Component {

  render() {
    return(
      <div className="w-full min-h-screen flex flex-col p-20 items-center text-gray-200 tracking-wide bg-pink-900 ">
        <h1 className="text-3xl font-semibold tracking-wide uppercase">React To Do List</h1>
        <TodoContainer />
      </div>
    );
  }
};
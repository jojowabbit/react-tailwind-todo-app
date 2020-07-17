import React from 'react';

import TodoContainer from './components/Todo/TodoContainer';
import './styles/main.css'
import Background from './assets/h2.jpg';

export default class App extends React.Component {

  render() {
    return(
      <div className="w-full min-h-screen flex justify-center items-center text-gray-200 tracking-wide bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${Background})`}}>
        <TodoContainer />
      </div>
    );
  }
};
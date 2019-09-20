import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeBody from './components/HomeBody';

class App extends Component {
  state = {
    todos: [
      {
        id:1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id:2,
        title: 'Go to park',
        completed: false
      },
      {
        id:3,
        title: 'Fishing with friends',
        completed: false
      },
      {
        id:4,
        title: 'Vacation',
        completed: false
      }
    ]
  }
  render() {
    console.log(this.state.HomeBody)
    return (
      <div className="App">
        <h1>App</h1>
        <HomeBody />
      </div>
    );
  }
}

export default App;

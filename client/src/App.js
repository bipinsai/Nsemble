import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NGO from './components/NGO.js';
import './NGOS.css';

class App extends Component {
  state={
    ngos:[
      {
        id: 1,
        title: 'Deesha',
        completed: false
      },
      {
        id: 2,
        title: 'Being Human',
        completed: false
      },
      {
        id: 3,
        title: 'Red Cross',
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <NGO Ngos={this.state.ngos}/>
      </div>
    );
  }
}

export default App;

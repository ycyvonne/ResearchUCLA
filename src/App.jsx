import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Main from './pages/Main/Main';

const options = ['Algorithms', 'ML', 'Wow', 'Quantum Computing', 'Testing', 'Cookie'];
class App extends Component {

  render() {
    return (
    <Main/>
      )
  }
}

export default App;

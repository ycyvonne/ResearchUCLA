import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Dropdown from './components/Filter/Dropdown';
class App extends Component {
  render() {
    return (
      <div className="back">
      <Dropdown/>
      </div>
    )
  }
}

export default App;

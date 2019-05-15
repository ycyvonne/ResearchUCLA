import React, { Component } from 'react';
import './App.scss';
import Main from './pages/Main/Main';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faEllipsisH, faBars, faTimes);

class App extends Component {

  render() {
    return (
      <Main/>
    )
  }
}

export default App;

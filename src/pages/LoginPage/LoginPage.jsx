
import React, { Component } from 'react'
import firebase from 'firebase';
import './style.scss';

var provider = new firebase.auth.GoogleAuthProvider();
class LoginPage extends Component {
    constructor(props) {
      super(props)
    }
    render() { 
        return (
      <div className="login-page">
        <button onClick={this.props.login}>
   Log in 
        </button>
      </div>
        )
    }
  }
  
  export default LoginPage
  
import React, { Component } from 'react';
import './style.scss';
import FacultyPage from '../../pages/FacultyPage/FacultyPage';
import ResearchPage from '../../pages/ResearchPage/ResearchPage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import ResourcesPage from '../../pages/ResourcesPage/ResourcesPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Page from '../../components/Page/Page';
import Auth from '../../components/Auth';
import base from '../../base';
import {provider} from '../../base';
import firebase from 'firebase'
import AdminPage from '../AdminPage';

const fakeAuth = {
    isAuthenticated: false,
  };

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            user:false
        }

    }
    componentDidMount() {
        //const rg = this.state.card.researchGroup;
        this.ref = base.syncState("cards", {
            context: this,
            state: 'cards',
            asArray: true
        });
        
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    login = () =>  {
        firebase.auth().signInWithRedirect(provider);
        firebase.auth()
        .getRedirectResult()
        .then((result) => {
            if (result.credential) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              var token = result.credential.accessToken;
              // ...
            }
            // The signed-in user info.
            var user = result.user;
          }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
       
    }


    render() {
        return (
            <Router>
               
                <Page>
                    <Route path="/research" render={() => (<ResearchPage cards={this.state.cards} />)} />
                    <Route path="/faculty" component={FacultyPage} />
                    <Route path="/news" component={NewsPage} />
                    <Route path="/resources" component={ResourcesPage} />
                    <PrivateRoute path="/admin" rcomponent={AdminPage} />
                    <Route path="/login" render={() => (<LoginPage login={this.login} />)} />
                </Page>
            </Router>
        );
    }

}

function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
         fakeAuth.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

export default Main;

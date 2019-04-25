import React, { Component } from 'react';
import './style.scss';
import FacultyPage from '../../pages/FacultyPage/FacultyPage';
import ResearchPage from '../../pages/ResearchPage/ResearchPage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import ResourcesPage from '../../pages/ResourcesPage/ResourcesPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page from '../../components/Page/Page';
import base from '../../base';
import firebase from 'firebase';
var provider = new firebase.auth.GoogleAuthProvider();


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
        this.login = this.login.bind(this)

    }
    componentDidMount() {
        //const rg = this.state.card.researchGroup;
        this.ref = base.syncState("cards", {
            context: this,
            state: 'cards',
            asArray: true
        });
        //firebase.auth().useDeviceLanguage();
        
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    login() {
        firebase.auth().signInWithRedirect(provider);
      
        firebase.auth().getRedirectResult().then(function(result) {
            if (result.credential) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              var token = result.credential.accessToken;
              // ...
            }
            // The signed-in user info.
            var user = result.user;
          }).catch(function(error) {
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
                    <Route path="/login" component={LoginPage} login={this.login} />
                </Page>
            </Router>
        );
    }

}

export default Main;

import React, { Component } from 'react';
import './style.scss';
import FacultyPage from '../../pages/FacultyPage/FacultyPage';
import ResearchPage from '../../pages/ResearchPage/ResearchPage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import ResourcesPage from '../../pages/ResourcesPage/ResourcesPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Page from '../../components/Page/Page';
import base from '../../base';
import {provider} from '../../base';
import firebase from 'firebase'
import AdminPage from '../AdminPage';

const googleAuth = {
    isAuthenticated: false,
  };

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            user:false,
        }

    }
    componentDidMount() {
        //const rg = this.state.card.researchGroup;
        this.ref = base.syncState("cards", {
            context: this,
            state: 'cards',
            asArray: true
        });
        firebase.auth().onAuthStateChanged((user) => {
          console.log('user', user)
          if (user) {
            googleAuth.isAuthenticated = true;
            this.setState({redirectAuth: true})
          } else {
            googleAuth.isAuthenticated = false;
          }
        });
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    login = () =>  {
        firebase.auth().signInWithRedirect(provider);
    }
    
    logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setState({ user: null })
        })
        .catch(error => {
          console.log('logout error:', error)
        })
    }

    render() {
      return (
          <Router>
              
              <Page>
                  <Route path="/research" render={() => (<ResearchPage cards={this.state.cards} />)} />
                  <Route path="/faculty" component={FacultyPage} />
                  <Route path="/news" component={NewsPage} />
                  <Route path="/resources" component={ResourcesPage} />
                  <PrivateRoute path="/admin" component={AdminPage} />
                  <Route path="/login" render={() => (<LoginPage login={this.login} logout={this.logout} />)} />
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
         googleAuth.isAuthenticated ? (
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

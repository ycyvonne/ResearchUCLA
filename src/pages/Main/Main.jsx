import React, { Component } from 'react';
import './style.scss';
import NavBar from '../../components/NavBar/NavBar';
import Faculty from '../../pages/Faculty/Faculty';
import Research from '../../pages/Research/Research';
import News from '../../pages/News/News';
import Resources from '../../pages/Resources/Resources';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";


class Main extends Component {
    render() {
        return (
            <Router>
                <div id="main-wrapper">
                    <NavBar></NavBar>
                    <Route path="/research" component = {Research} />
                    <Route path="/faculty" component = {Faculty} />
                    <Route path="/news" component = {News} />
                    <Route path="/resources" component = {Resources} />
                    
                </div>
            </Router>
        );
    }
}

export default Main;
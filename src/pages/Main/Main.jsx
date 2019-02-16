import React, { Component } from 'react';
import './style.scss';
import NavBar from '../../components/NavBar/NavBar';
import FacultyPage from '../../pages/FacultyPage/FacultyPage';
import ResearchPage from '../../pages/ResearchPage/ResearchPage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import ResourcesPage from '../../pages/ResourcesPage/ResourcesPage';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";


class Main extends Component {

    render() {
        return (
            <Router>
                <div id="main-wrapper">
                    <NavBar></NavBar>
                    <Route path="/research" component = {ResearchPage} />
                    <Route path="/faculty" component = {FacultyPage} />
                    <Route path="/news" component = {NewsPage} />
                    <Route path="/resources" component = {ResourcesPage} />
                 </div>
            </Router>
        );
    }

}

export default Main;
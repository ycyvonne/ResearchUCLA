import React, { Component } from 'react';
import './style.scss';
import FacultyPage from '../../pages/FacultyPage/FacultyPage';
import ResearchPage from '../../pages/ResearchPage/ResearchPage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import ResourcesPage from '../../pages/ResourcesPage/ResourcesPage';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Page from '../../components/Page/Page';


class Main extends Component {

    render() {
        return (
            <Router>
                <Page>
                    <Route path="/research" component = {ResearchPage} />
                    <Route path="/faculty" component = {FacultyPage} />
                    <Route path="/news" component = {NewsPage} />
                    <Route path="/resources" component = {ResourcesPage} />
                </Page>
            </Router>
        );
    }

}

export default Main;

import React, { Component } from 'react';
import './style.scss';
import FacultyPage from '../../pages/FacultyPage/FacultyPage';
import ResearchPage from '../../pages/ResearchPage/ResearchPage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import ResourcesPage from '../../pages/ResourcesPage/ResourcesPage';
import NavBar from '../../components/NavBar/NavBar';
import ResearchGroupCard from '../../components/ResearchGroupCard/ResearchGroupCard';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import { jsonResponse } from '../../mockData';
import Page from '../../components/Page/Page';
import base from '../../base';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
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
    render() {
        return (
            <Router>
                <Page>
                    <NavBar></NavBar>
                    <Route path="/research" render={()=>(<ResearchPage cards={this.state.cards}/>)} />
                    <Route path="/faculty" component = {FacultyPage} />
                    <Route path="/news" component = {NewsPage} />
                    <Route path="/resources" component = {ResourcesPage} />
                </Page>
            </Router>
        );
    }
}

export default Main;

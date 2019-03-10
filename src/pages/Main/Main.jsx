import React, { Component } from 'react';
import './style.scss';
import FacultyPage from '../../pages/FacultyPage/FacultyPage';
import ResearchPage from '../../pages/ResearchPage/ResearchPage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import ResourcesPage from '../../pages/ResourcesPage/ResourcesPage';
import ResearchGroupCard from '../../components/ResearchGroupCard/ResearchGroupCard';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import { jsonResponse } from '../../mockData';
import Page from '../../components/Page/Page';

class Main extends Component {
    constructor(props) {
        this.state = {
            cards:[]
        }
    }
    componentDidMount() {
        const rg = this.state.card.researchGroup;
        this.ref = base.syncState(rg, {
            context: this,
            state: 'cards',
        });
        setTimeout(()=>{
            this.setState({
                cards
            })
        },0) // tricking the syncstate to add this new info
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
        
    }
    render() {
        return (
            <Router>
                    <NavBar></NavBar>
                <Page>
                    <ResearchGroupCard {...jsonResponse.cards[14]} />
                    {/* <ResearchGroupCard group="Automated Reasoning Group" /> */}
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

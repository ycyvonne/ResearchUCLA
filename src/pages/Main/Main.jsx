import React, { Component } from 'react';
import './style.scss';
import NavBar from '../../components/NavBar/NavBar';
import FacultyPage from '../../pages/FacultyPage/FacultyPage';
import ResearchPage from '../../pages/ResearchPage/ResearchPage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import ResourcesPage from '../../pages/ResourcesPage/ResourcesPage';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Filter from '../../components/Filter/Filter'
const options = ['Algorithms', 'ML', 'Wow', 'Quantum Computing', 'Testing', 'Cookie'];

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
          options : options
        }
        this.loadFilteredOptions=this.loadFilteredOptions.bind(this);
      }
    loadFilteredOptions(filters) {
      let array = [];
        if(filters.length === 0) {
          array = options
        }
        for (let i =0; i < options.length; i++) {
            for (let k =0; k < filters.length; k++) {
              if(options[i] === filters[k])
                array.push(options[i]);
            }
        }
        this.setState({
          options: array
        })
    
    }
    
    createFilters = option => (
      <li className="list-item-container" key={option}>
        {option}
      </li>
    )
    
    createFilterables = (options) => (
      this.state.options.map(this.createFilters)
    )
    render() {
        return (
            <Router>
                <div id="main-wrapper">
                    <NavBar></NavBar>
                    <Route path="/research" component = {ResearchPage} />
                    <Route path="/faculty" component = {FacultyPage} />
                    <Route path="/news" component = {NewsPage} />
                    <Route path="/resources" component = {ResourcesPage} />
                    <Filter loadFilteredOptions={this.loadFilteredOptions} />
                     <div className="main-content-wrapper">
                     <ul>
                     {this.createFilterables()}
                     </ul>
                     </div>
                 </div>
            </Router>
        );
    }

}

export default Main;
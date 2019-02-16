
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown'
import './style.scss';

const areas = ['Research Area', 'Impact Area', 'Classes/Skills']
const options1 = [{category:'Algorithms', selected: false}, {category:'Quantum Computing', selected: false}, {category:'Wow', selected: false}, {category:'ML', selected: false}, {category:'CV', selected: false},{category:'Cooking', selected: false},{category:'Theory', selected: false},]
const options2 = [{category:'Scientific Computing', selected: false}, {category:'Quantum Computing', selected: false}, {category:'Wow', selected: false}, {category:'ML', selected: false}, {category:'CV', selected: false},{category:'Cooking', selected: false},{category:'Theory', selected: false},]
export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOpenTitle: '',
            listOpenList: '',
            width: window.width
        };
        this.toggleList= this.toggleList.bind(this);
    }
    componentDidMount() {
        //  this.toggleMenu();
          window.addEventListener("resize", this.handleWindowSizeChange);
      }
  
    componentWillUnmount() {
          window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    handleWindowSizeChange = () => {
        this.setState({
            width: window.innerWidth,
        })
    };

    toggleListTitle(name) {
        this.setState({
            listOpenTitle: name
        })
    }
    toggleList(name) {
        this.setState({
            listOpenList: name
        })
    }
    createArea = option => (
        <div className="filter-group" onMouseOver={() =>this.toggleListTitle(option)} /*onMouseOut={() =>this.toggleListTitle('option')}*/ >
        <div className="header-title"> {option} </div>
        <div onMouseOver={() =>this.toggleList(option)}>
        <Dropdown
              loadFilteredOptions={this.props.loadFilteredOptions}
              visible={this.state.listOpenTitle || this.state.listOpenList}
              label={option}
              options={option === 'Research Area' ? options1 : options2 }
        />
        </div>
        </div>
    )

    createFilter = () => (
        areas.map(this.createArea)
    )

render() {
    const { width } = this.state;
    const isMobile = width <= 800;
    return (
        <div className={ isMobile ? "mobile-filter" :"filter"}>
        {this.createFilter()}
        </div>
    )
}


}

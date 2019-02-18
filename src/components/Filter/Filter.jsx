
import React, { Component } from 'react';
import Dropdown from './Dropdown'
import './style.scss';

const areas = ['Research Area', 'Impact Area', 'Classes/Skills']

const options1 = [{category:'Algorithms', selected: false}, {category:'Quantum Computing', selected: false}, {category:'Wow', selected: false}, {category:'ML', selected: false}, {category:'CV', selected: false},{category:'Cooking', selected: false},{category:'Theory', selected: false},]
const options2 = [{category:'Scientific Computing', selected: false}, {category:'Quantum Computing', selected: false}, {category:'Wow', selected: false}, {category:'ML', selected: false}, {category:'CV', selected: false},{category:'Cooking', selected: false},{category:'Theory', selected: false},]
const options3 = [{category:'CS32', selected: false}, {category:'Quantum Computing', selected: false}, {category:'Wow', selected: false}, {category:'ML', selected: false}, {category:'CV', selected: false},{category:'Cooking', selected: false},{category:'Theory', selected: false},]
const allOptions = 
    {'Research Area': options1, 'Impact Area' :options2, 'Classes/Skills': options3}
    
export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOpenTitle: '',
            listOpenList: '',
            width: window.width
        };
        this.toggleList=this.toggleList.bind(this);
    }
    componentDidMount() {
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
        <div className="filter-group" onMouseOver={() =>this.toggleListTitle(option)} onMouseOut={() =>this.toggleListTitle('')} >
        <div className="header-title"> {option} </div>
        <div>
        <Dropdown
              loadFilteredOptions={this.props.loadFilteredOptions}
              toggleList={this.toggleList}
              visible={this.state.listOpenTitle || this.state.listOpenList}
              label={option}
              options={Object.values(allOptions[option])}
        />
        </div>
        </div>
    )

    createFilter = () => (
        (Object.keys(allOptions)).map(this.createArea)
    )

render() {  
    const { width } = this.state;
    const isMobile = width <= 800;
    console.log(Object.keys(allOptions))
    return (
        <div className={ isMobile ? "mobile-filter" :"filter"}>
        {this.createFilter()}
        </div>
    )
}


}

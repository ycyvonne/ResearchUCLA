
import React, { Component } from 'react';
import Dropdown from './Dropdown'
import './style.scss';

const researchArea = ['Algorithms', 'Quantum Computing', 'Surfing', 'Cooking', 'Machine Learning', 'Cycling', 'Rowing', 'Crying'];    
const impactArea = ['Treeing', 'Eating', 'Sewing', 'Foundations', 'Medical'];
const classSkill = ['Walking', 'Bowing', 'CS32', 'CS111', 'Linear Algebra', 'Graphic Design'];
export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOpenTitle: '',
            listOpenList: '',
            width: window.width
        };
        this.allOptions = 
        {'Research Area': this.createDicts(researchArea), 'Impact Area': this.createDicts(impactArea), 
        'Classes/Skills': this.createDicts(classSkill)};
        this.toggleList=this.toggleList.bind(this);
        this.toggleListTitle=this.toggleListTitle.bind(this);
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

    createDicts(area) {
        let arrayOfDict = []
        for (let i = 0 ; i < area.length ; i++) {
            arrayOfDict.push({category:area[i], selected: false});
        }
        return arrayOfDict;
    }

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
        <div className="filter-group" onMouseOver={() =>this.toggleListTitle(option)} onMouseOut={ () =>this.toggleListTitle('')} >
        <div className="header-title"> {option} </div>
        <div>
        <Dropdown
              loadFilteredOptions={this.props.loadFilteredOptions}
              toggleListTitle={this.toggleListTitle}
              toggleList={this.toggleList}
              visible={this.state.listOpenTitle || this.state.listOpenList}
              label={option}
              key={option}
              options={Object.values(this.allOptions[option])}
        />
        </div>
        </div>
    )

    createFilter = () => (
        (Object.keys(this.allOptions)).map(this.createArea)
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

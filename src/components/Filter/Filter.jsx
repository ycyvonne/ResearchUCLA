
import React, { Component } from 'react';
import Dropdown from './Dropdown'
import { createDicts } from '../../helpers';
import './style.scss';

const researchArea = ['Algorithms', 'Quantum Computing', 'Surfing', 'Cooking', 'Machine Learning', 'Cycling', 'Rowing', 'Crying'];    
const impactArea = ['Treeing', 'Eating', 'Sewing', 'Foundations', 'Medical'];
const classSkill = ['Walking', 'Bowing', 'CS 32', 'CS 111', 'Linear Algebra', 'Graphic Design'];

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOpenTitle: '',
            listOpenList: '',
        };
        this.allOptions = {
            'Research Area': createDicts(researchArea),
            'Impact Area': createDicts(impactArea), 
            'Classes & Skills': createDicts(classSkill)
        };
    }

    toggleListTitle = (name) => {
        if(name === 'mobile') {
            this.setState({
                listOpenTitle: '',
                listOpenList:''
            })
        }
        else {
            this.setState({
                listOpenTitle: name
            })
        }
    }
    toggleList = (name) => {
        this.setState({
            listOpenList: name
        })
    }
    createArea = (option, i) => (
        <div className="filter-group"
            onMouseOver={() =>this.toggleListTitle(option)}
            onMouseOut={ () =>this.toggleListTitle('')}
            key={i}
        >
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
        return (
            <div className="filter">
            {this.createFilter()}
            </div>
        )
    }


}

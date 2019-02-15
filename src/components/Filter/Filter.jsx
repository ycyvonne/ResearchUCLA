
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown'
import './style.scss';

const areas = ['Research Area', 'Impact Area', 'Classes/Skills']

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOpenTitle: '',
            listOpenList: ''
        };
        this.toggleList= this.toggleList.bind(this);
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
        <div className="filter-group"onMouseOver={() =>this.toggleListTitle(option)} >
        <div className="header-title"> {option} </div>
        <div onMouseOver={() =>this.toggleList(option)}>
        <Dropdown
              loadFilteredOptions={this.props.loadFilteredOptions}
              visible={this.state.listOpenTitle || this.state.listOpenList}
              label={option}
        />
        </div>
        </div>
    )

    createFilter = () => (
        areas.map(this.createArea)
    )

render() {
    return (
        <div className="filter">
        {this.createFilter()}
        </div>
    )
}


}

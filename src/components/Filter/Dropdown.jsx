import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './style.scss';
import Checkbox from './Checkbox'

const options = [{category:'Algorithms', selected: false}, {category:'Quantum Computing', selected: false}, {category:'Wow', selected: false}, {category:'ML', selected: false}, {category:'CV', selected: false},{category:'Cooking', selected: false},{category:'Theory', selected: false},]
export default class Dropdown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          listOpen: this.props.filterVisible,
          headerTitle: "RESEARCH AREAS",
          clearAll: false,
          options: options,
        };
        this.addSelectedItem = this.addSelectedItem.bind(this);
        this.toggleList = this.toggleList.bind(this);
        this.addFilter = this.addFilter.bind(this);
      }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
          }))
          this.addFilter();

    }
    createCheckbox = option => (
        <Checkbox
                label={option.category}
                key={option.category}
                addSelectedItem={this.addSelectedItem}
                selected={option.selected}
                addFilter={this.addFilter}
            />
    )

    createCheckboxes = () => (
        this.state.options.map(this.createCheckbox)
    )
    addSelectedItem(item, selected) {
        var i;
        for ( i =0; i < options.length; i++ ) {
                if (options[i].category === item) {
                    options[i].selected = selected;
                }
        }
        this.setState({
            options: options
        })
    }
    clearAll() {
        const newOptions = [...this.state.options];
        var i;
        for ( i =0; i < newOptions.length; i++ ) {
                    newOptions[i].selected = false
        }
        this.setState({
            options: newOptions
        })

    }

    addFilter(){
        var filterList = this.state.options
        var array = []
        for ( var i =0; i < filterList.length; i++ ) {
            if (filterList[i].selected) {
                array.push(filterList[i].category)
            }
    }
        this.props.loadFilteredOptions(array)
    }

    render() {
        const{ listOpen, headerTitle, clearAll } = this.state
        return (
            <div className="filter">
            <FontAwesomeIcon className="icon"icon={faTimesCircle} size="2x" onClick={() => this.toggleList()} />
           {  listOpen && (
             <div className="wrapper">
                <div className="header">  
                    <div className="header-title" >
                    {headerTitle}
                    </div>
                    <FontAwesomeIcon className="icon"icon={faTimesCircle} size="1x" onClick={() => this.toggleList()} />
                </div>
                <ul className="list" >
                    {this.createCheckboxes()}
                </ul>
            <div className="clear" onClick={() => this.clearAll()}> Clear all </div>
            </div> )
           }
            </div>
        )

    }

    
}
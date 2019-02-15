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
          options: options,
        };
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
    addSelectedItem = (item, selected) => {
        for (let i =0; i < options.length; i++ ) {
                if (options[i].category === item) {
                    options[i].selected = selected;
                }
        }
        this.setState({
            options: options
        })
        this.addFilter();
    }
    clearAll = () => {
        const newOptions = [...this.state.options];
        for (let i =0; i < newOptions.length; i++ ) {
                    newOptions[i].selected = false
        }
        this.setState({
            options: newOptions
        })
        this.props.loadFilteredOptions([])

    }

    addFilter(){
        let filterList = this.state.options
        let array = []
        for ( let i =0; i < filterList.length; i++ ) {
            if (filterList[i].selected) {
                array.push(filterList[i].category)
            }
    }
        this.props.loadFilteredOptions(array)
    }

    render() {
        return (
            <div className="dropdown" >
           {  this.props.visible === this.props.label && (
             <div className="wrapper">
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
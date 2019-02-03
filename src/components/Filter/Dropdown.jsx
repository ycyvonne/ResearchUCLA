import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './style.scss';
import Checkbox from './Checkbox'

const options = [{category:'Algorithms', selected: false}, {category:'Quantum Computing', selected: false}, {category:'Wow', selected: false}, {category:'ML', selected: false}, {category:'CV', selected: false},{category:'Cooking', selected: false},{category:'Theory', selected: false},]
export default class Dropdown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          listOpen: false,
          headerTitle: "RESEARCH AREAS",
          selectedArray:[]
        };
        this.addSelectedItem = this.addSelectedItem.bind(this);
      }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
          }))

    }
    createCheckbox = option => (
        <Checkbox
                label={option.category}
                key={option.category}
                addSelectedItem={this.addSelectedItem}
                selected={option.selected}
            />
    )

    createCheckboxes = () => (
        options.map(this.createCheckbox)
    )
    addSelectedItem(item, selected) {
        var i;
        for ( i =0; i < options.length; i++ ) {
                if (options[i].category === item) {
                    options[i].selected = selected;
                    console.log(options[i])
                }
        }
    }

    render() {
        const{ listOpen, headerTitle } = this.state
        return (
            <div className="wrapper">
                <div 
                className="header"
                onClick={() => this.toggleList()}
                >  
                    <FontAwesomeIcon className="icon"icon={faChevronDown} size="1x"/>
                    <div className="header-title">
                    {headerTitle}
                    </div>
                </div>
               { listOpen && <ul className="list">
                    {this.createCheckboxes()}
                </ul>
               }
            </div>
            
        )

    }

    
}
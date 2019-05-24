import React, { Component } from 'react';
import './style.scss';
import Checkbox from './Checkbox'
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "../Button/Button";
import vars from '../../styles/vars.scss';

export default class Dropdown extends Component {
    constructor(props){
        super(props)
        this.state = {
          options: this.props.options
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
        for (let i = 0; i < this.props.options.length; i++ ) {
                if (this.props.options[i].category === item) {
                    this.props.options[i].selected = selected;
                }
        }
        this.setState({
            options: this.props.options
        })
        this.addFilter();
    }
    clearAll = () => {
        const newOptions = [...this.state.options];
        for (let i = 0; i < newOptions.length; i++ ) {
            newOptions[i].selected = false
        }
        this.setState({
            options: newOptions
        })
        this.props.loadFilteredOptions(this.props.label,[])
    }

    addFilter(){
        let filterList = this.state.options
        let array = []
        for ( let i =0; i < filterList.length; i++ ) {
            if (filterList[i].selected) {
                array.push(filterList[i].category)
            }
        }
        this.props.loadFilteredOptions(this.props.label,array)
    }

    render() {
        return (
            <div>
                <div 
                    className= {(this.props.visible === this.props.label ? "opacity-visible ": "opacity-invisible ") + "desktop-only"}
                    onMouseOver={() => this.props.toggleList(this.props.label)}
                    onMouseOut= {() => this.props.toggleList('')}
                >
                    <div className="dropdown">
                        <div className= "dropdown-wrapper">
                        <ul className="list">
                            {this.createCheckboxes()}
                        </ul>
                        <div className="clear" onClick={() => this.clearAll()}> Clear all </div>
                        </div> 
                    </div>
                </div>

                <div 
                    className= { (this.props.visible === this.props.label ? "opacity-visible ": "opacity-invisible ") + "mobile-only" }
                >
                    <div className="mobile-dropdown">
                        <div className= "dropdown-wrapper">
                            <div className="button-wrapper">
                                <Button backgroundColor="white" textColor={vars.gray2} borderColor="white" onClick={
                                    () => this.props.toggleListTitle('mobile')}
                                        hoverTextColor="black">
                                        <FontAwesomeIcon icon="times" size="2x" />
                                </Button>
                            </div>
                        <ul className="list" >
                            {this.createCheckboxes()}
                        </ul>
                        <div className="clear" onClick={() => this.clearAll()}> Clear all </div>
                        </div> 
                    </div>
                </div>
            </div>
        )

    }
}
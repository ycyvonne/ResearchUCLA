import React, { Component } from 'react';
import './style.scss';

export default class Checkbox extends React.Component {
    constructor(props){
        super(props)
        this.label=this.props.label;
        this.addSelectedItem = this.props.addSelectedItem;
        this.state = {
            selected: this.props.selected
        };
        this.handleSelectItem = this.handleSelectItem.bind(this);
    }
 
    handleSelectItem() {
        this.setState({
            selected: !this.state.selected
        }, () => {this.addSelectedItem(this.label, this.state.selected)})
    }

    render() {
        
        return(
            <div className="list-item-container">
            <input type="checkbox" label={this.label} checked={this.state.selected} onChange={this.handleSelectItem} />
            <label htmlFor={this.label} onClick={ () => this.handleSelectItem()}> {this.label} </label>
            </div>
          
        )

    
    }
}
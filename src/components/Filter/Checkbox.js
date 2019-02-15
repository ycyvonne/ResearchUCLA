import React, { Component } from 'react';
import './style.scss';

export default class Checkbox extends React.Component {
    constructor(props){
        super(props)
        this.label=this.props.label;
        this.refresh = this.props.refresh;
        this.addSelectedItem = this.props.addSelectedItem;
        this.handleSelectItem = this.handleSelectItem.bind(this);
    }
    handleSelectItem() {
        this.addSelectedItem(this.label, !this.props.selected);
    }
    render() {
        
        return(
            <div className="list-item-container">
            <input type="checkbox" label={this.label} checked={this.props.selected} onChange={this.handleSelectItem} />
            <label htmlFor={this.label} onClick={ () => this.handleSelectItem()}> {this.label} </label>
            </div>
          
        )

    
    }
}
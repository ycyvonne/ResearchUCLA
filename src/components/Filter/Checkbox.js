import React, { Component } from 'react';
import './style.scss';

export default class Checkbox extends Component {
    constructor(props){
        super(props)
        this.handleSelectItem = this.handleSelectItem.bind(this);
    }
    handleSelectItem(event) {
        this.props.addSelectedItem(this.props.label, !this.props.selected);
    }
    render() {
        
        return(
            <div className="list-item-container">
              <div className="pretty p-default p-curve p-fill">
                <input type="checkbox" className="check" label={this.props.label} checked={this.props.selected} onChange={this.handleSelectItem} />
                  <div className="state">
                    <label>{this.props.label}</label>
                  </div>
              </div>
            </div>
          
        )

    
    }
}
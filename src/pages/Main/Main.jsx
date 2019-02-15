import React, { Component } from 'react';
import './style.scss';
import Filter from '../../components/Filter/Filter'

const options = ['Algorithms', 'ML', 'Wow', 'Quantum Computing', 'Testing', 'Cookie'];

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
          options : options
        }
        this.loadFilteredOptions=this.loadFilteredOptions.bind(this);
      }
    loadFilteredOptions(filters) {
      let array = [];
        if(filters.length === 0) {
          array = options
        }
        for (let i =0; i < options.length; i++) {
            for (let k =0; k < filters.length; k++) {
              if(options[i] === filters[k])
                array.push(options[i]);
            }
        }
        this.setState({
          options: array
        })
    
    }
    
    createFilters = option => (
      <li className="list-item-container" key={option}>
        {option}
      </li>
    )
    
    createFilterables = (options) => (
      this.state.options.map(this.createFilters)
    )
      render() {
        return (
          <div className="back">
            <Filter
            loadFilteredOptions={this.loadFilteredOptions}
            />
             <ul>
              {this.createFilterables()}
             </ul>
          </div>
        )
      }


}

export default Main;
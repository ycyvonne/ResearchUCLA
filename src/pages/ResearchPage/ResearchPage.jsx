import React, { Component } from 'react';
import './style.scss';
import Filter from '../../components/Filter/Filter'
const options = ['Algorithms', 'ML', 'Wow', 'Quantum Computing', 'Testing', 'Cookie'];
class ResearchPage extends Component {
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
            <div id="ResourcesPage-wrapper">
            <Filter loadFilteredOptions={this.loadFilteredOptions} />
                     <div className="research-content-wrapper">
                     <ul>
                     {this.createFilterables()}
                     </ul>
                     </div>
            </div>
        );
    }
}

export default ResearchPage;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Dropdown from './components/Filter/Dropdown';

const options = ['Algorithms', 'ML', 'Wow', 'Quantum Computing', 'Testing', 'Cookie'];
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      options : options
    }
    this.loadFilteredOptions=this.loadFilteredOptions.bind(this);
  }
loadFilteredOptions(filters) {
    if(filters.length === 0) {
      return;
    }
    var array = [];
    for (var i =0; i < options.length; i++) {
        for (var k =0; k < filters.length; k++) {
          if(options[i] === filters[k])
            array.push(options[i]);
        }
        console.log(options[i])
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
      <Dropdown 
        filterVisible={true}
        loadFilteredOptions={this.loadFilteredOptions}
        />
         <ul className="list" >
          {this.createFilterables()}
         </ul>
      </div>
    )
  }
}

export default App;

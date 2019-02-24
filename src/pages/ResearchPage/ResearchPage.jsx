import React, { Component } from 'react';
import './style.scss';
import Filter from '../../components/Filter/Filter'
const options = ['Algorithms', 'ML', 'Wow', 'Quantum Computing', 'Testing', 'Cookie'];
class ResearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          options : options,
          filters: {'Research Area': [], 'Impact Area':[], 'Classes/Skills':[]},
        }
        this.loadFilteredOptions=this.loadFilteredOptions.bind(this);
      }
    loadFilteredOptions(type,filters) {
      let full = this.state.filters;
      let change = this.state.filters[type]
      for(let c = 0; c < filters.length; c++ ) {
            change[c] = filters[c]
      }
      full[type] = change.slice(0, filters.length)
      this.setState({
        filters: full
      });
        if (this.state.filters['Research Area'].length === 0 && this.state.filters['Impact Area'].length === 0 && this.state.filters['Classes/Skills'].length === 0) {
          this.setState({
            options: options
          })
          return;
        }
        this.loadCards();
    }

    loadCards() {
      let array = [];
      for (let i =0; i < options.length; i++) {
        for (let c =0; c < this.state.filters['Research Area'].length; c++) {
          if(options[i] === this.state.filters['Research Area'][c])
           { array.push(options[i]);
           
           }
        }
        for (let k =0; k < this.state.filters['Impact Area'].length; k++) {
          if(options[i] === this.state.filters['Impact Area'][k])
            {array.push(options[i]);
              
            }
        }
        for (let r =0; r < this.state.filters['Classes/Skills'].length; r++) {
          if(options[i] === this.state.filters['Classes/Skills'][r])
           { array.push(options[i]);
            
           }
        }
    }
      this.setState({
        options: array
      })
    }
    
    createCard = option => (
      <li className="list-item-container" key={option}>
        {option}
      </li>
    )
    
    createCards = (options) => (
      this.state.options.map(this.createCard)
    )
    render() {
        return (
            <div id="ResourcesPage-wrapper">
            <Filter loadFilteredOptions={this.loadFilteredOptions} />
              <div className="research-content-wrapper">
                <ul>
                  {this.createCards()}
                </ul>
              </div>
            </div>
        );
    }
}

export default ResearchPage;
import React, { Component } from 'react';
import ResearchGroupCardList from '../../components/ResearchGroupCardList/ResearchGroupCardList'
import './style.scss';
import Filter from '../../components/Filter/Filter'

class ResearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [],
      filters: { 'Research Area': [], 'Impact Area': [], 'Classes & Skills': [] },
      cards: this.props.cards
    }
    this.loadFilteredOptions = this.loadFilteredOptions.bind(this);
  }

  loadFilteredOptions(type, filters) {
    let full = this.state.filters;
    let change = this.state.filters[type]
    for (let c = 0; c < filters.length; c++) {
      change[c] = filters[c]
    }
    full[type] = change.slice(0, filters.length)

    this.setState({
      filters: full,
    });
    if (this.state.filters['Research Area'].length === 0 && this.state.filters['Impact Area'].length === 0 && this.state.filters['Classes & Skills'].length === 0) {
      this.setState({
        options: []
      }, () => this.filterData())

      return;
    }
    let totalFilters = []
    totalFilters = totalFilters.concat(this.state.filters['Research Area'])
    totalFilters = totalFilters.concat(this.state.filters['Impact Area'])
    totalFilters = totalFilters.concat(this.state.filters['Classes & Skills'])
    this.setState({
      options: totalFilters
    }, () => this.filterData());

  }


  filterData() {
    const availableData = this.state.cards;
    const filters = this.state.options;
    if (filters.length < 1) {
      this.setState({
        data: this.state.cards
      })
      return;
    }
    var newData = []

    for (let i = 0; i < availableData.length; i++) {
      let filterCount = 0;
      for (let j = 0; j < filters.length; j++) {
        if (!availableData[i].courses.includes(filters[j]) && !availableData[i].areas.includes(filters[j])) {
          break;
        }
        filterCount++;
      }
      if (filterCount === filters.length) {
        newData.push(availableData[i]);
      }
    }
    this.setState({
      data: newData
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
      <div>
        <Filter loadFilteredOptions={this.loadFilteredOptions} />
        <ResearchGroupCardList cards={this.props.cards} />
      </div>

    );
  }
}

export default ResearchPage;
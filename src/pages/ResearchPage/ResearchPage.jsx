import React, { Component } from 'react';
import ResearchGroupCardList from '../../components/ResearchGroupCardList/ResearchGroupCardList'
import './style.scss';
import Filter from '../../components/Filter/Filter'
import Page from '../../components/Page/Page'
import { filter } from 'rsvp';

const data =  [{
	professor: "Adnan Darwiche", 
	researchGroup: "Automated Reasoning Group", 
	content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
	courses: ["CS 32"],
	areas: ["Foundations", "Algorithms", "Treeing"]
},{
	professor: "Adnan Darwiche", 
	researchGroup: "Automated Reasoning Group", 
	content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
	courses: ["CS M146", "CS 161"],
	areas: ["Algorithms"]
},{
	professor: "Adnan Darwiche", 
	researchGroup: "Automated Reasoning Group", 
	content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
	courses: ["CS M146", "CS 161", "CNNs", "RNNs"],
	areas: ["Foundations", "Algorithms"]
},{
	professor: "Adnan Darwiche", 
	researchGroup: "Automated Reasoning Group", 
	content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
	courses: ["CS M146", "CS 161", "RNNs"],
	areas: ["Algorithms"]
},{
	professor: "Adnan Darwiche", 
	researchGroup: "Automated Reasoning Group", 
	content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
	courses: ["CS M146", "CS 161", "RNNs"],
	areas: ["Algorithms"]
},{
	professor: "Eggert", 
	researchGroup: "Automated Reasoning Group", 
	content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
	courses: ["CS M146", "CS 161", "CS 111"],
	areas: ["Algorithms" , "Surfing"]
},{
	professor: "Adnan Darwiche", 
	researchGroup: "Automated Reasoning Group", 
	content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
	courses: ["CS M146", "CS 161", "RNNs"],
	areas: []
},{
	professor: "Adnan Darwiche", 
	researchGroup: "Automated Reasoning Group", 
	content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
	courses: ["CS M146", "CS 161", "RNNs"],
	areas: []
},{
	professor: "Adnan Darwiche", 
	researchGroup: "Automated Reasoning Group", 
	content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
	courses: ["CS M146", "CS 161", "RNNs"],
	areas: []
},{
	professor: "Adnan Darwiche", 
	researchGroup: "Automated Reasoning Group", 
	content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  courses: [],
  areas: []
}]


class ResearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          options : [],
          filters: {'Research Area': [], 'Impact Area':[], 'Classes & Skills':[]},
          data: data
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
        filters: full,
      });
        if (this.state.filters['Research Area'].length === 0 && this.state.filters['Impact Area'].length === 0 && this.state.filters['Classes & Skills'].length === 0) {
          this.setState({
            options: []
          }, () => this.filterData())
          
          return;
        }
        let totalFilters = []
        totalFilters=totalFilters.concat(this.state.filters['Research Area'])
        totalFilters=totalFilters.concat(this.state.filters['Impact Area'])
        totalFilters=totalFilters.concat(this.state.filters['Classes & Skills'])
        this.setState({
          options: totalFilters
        }, () => this.filterData());

    }

      
  filterData(){
    const availableData = data;
    const filters = this.state.options;
    if(filters.length < 1) {
      this.setState({
        data: data
      })
      return;
    }
    var newData = []
    
    for(let i =0; i < availableData.length; i++) {
      let filterCount = 0;
      for(let j =0; j < filters.length; j++) {
        if (!availableData[i].courses.includes(filters[j]) && !availableData[i].areas.includes(filters[j]) ) {
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
            <Page>
               <Filter loadFilteredOptions={this.loadFilteredOptions} />
                <ResearchGroupCardList data={this.state.data}/>
            </Page>
        );
    }
}

export default ResearchPage;
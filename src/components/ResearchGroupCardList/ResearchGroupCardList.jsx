import React, { Component } from 'react';
import './style.scss';
import ResearchGroupCard from '../ResearchGroupCard/ResearchGroupCard'
import { formatContent , makeUppercase} from '../../helpers'

class ResearchGroupCardList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: [{
				professor: "Adnan Darwiche", 
				researchGroup: "Automated Reasoning Group", 
				content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				courses: ["CS M146"]
			},{
				professor: "Adnan Darwiche", 
				researchGroup: "Automated Reasoning Group", 
				content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				courses: ["CS M146", "CS 161"]
			},{
				professor: "Adnan Darwiche", 
				researchGroup: "Automated Reasoning Group", 
				content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				courses: ["CS M146", "CS 161", "CNNs", "RNNs"]
			},{
				professor: "Adnan Darwiche", 
				researchGroup: "Automated Reasoning Group", 
				content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				courses: ["CS M146", "CS 161", "RNNs"]
			},{
				professor: "Adnan Darwiche", 
				researchGroup: "Automated Reasoning Group", 
				content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				courses: ["CS M146", "CS 161", "RNNs"]
			},{
				professor: "Adnan Darwiche", 
				researchGroup: "Automated Reasoning Group", 
				content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				courses: ["CS M146", "CS 161", "RNNs"]
			},{
				professor: "Adnan Darwiche", 
				researchGroup: "Automated Reasoning Group", 
				content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				courses: ["CS M146", "CS 161", "RNNs"]
			},{
				professor: "Adnan Darwiche", 
				researchGroup: "Automated Reasoning Group", 
				content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				courses: ["CS M146", "CS 161", "RNNs"]
			},{
				professor: "Adnan Darwiche", 
				researchGroup: "Automated Reasoning Group", 
				content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				courses: ["CS M146", "CS 161", "RNNs"]
			},{
				professor: "Adnan Darwiche", 
				researchGroup: "Automated Reasoning Group", 
				content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				courses: ["CS M146", "CS 161", "RNNs"]
			}]
		}
	}

  render () {
    return (
    	<div className="card-list">
				{this.state.data.map(singleCard => 
					<ResearchGroupCard
						courses={singleCard.courses} 
						professor={makeUppercase(singleCard.professor)}
						content={formatContent(singleCard.content)}
						researchGroup={singleCard.researchGroup}
						/>
				)}
		</div>
	);
  }
}

export default ResearchGroupCardList;
import React, { Component } from 'react';
import './style.scss';
import ResearchGroupCard from '../ResearchGroupCard/ResearchGroupCard'
import { formatContent, makeUppercase } from '../../helpers'

class ResearchGroupCardList extends Component {

	constructor(props) {
		super(props);

		// ***STATE CURRENTLY CONTAINS DUMMY DATA!***
		// this.state should contain one element data, which is an array of objects, each of which contains information about a ResearchGroupCard
		// the required information must be appriately fetched 

		this.state = {
			data: props.cards
		}
	}

	render() {
		return (
			<div className="card-list">
				{this.state.data.map((singleCard, i) =>
					<ResearchGroupCard
						key={i}
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

export default ResearchGroupCardList
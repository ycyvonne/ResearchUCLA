import React, { Component } from 'react';
import './style.scss';
import ResearchGroupCard from '../ResearchGroupCard/ResearchGroupCard'
import { formatContent, makeUppercase } from '../../helpers'

class ResearchGroupCardList extends Component {

	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<div className="card-list">
				{this.props.cards.map((singleCard, i) =>
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
	import React, { Component } from 'react';
import './style.scss';
import ResearchGroupCard from '../ResearchGroupCard/ResearchGroupCard'
import { formatContent , makeUppercase} from '../../helpers'


class ResearchGroupCardList extends Component {


  render () {
    return (
    	<div className="card-list">
				{this.props.data.map((singleCard,i) => 
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
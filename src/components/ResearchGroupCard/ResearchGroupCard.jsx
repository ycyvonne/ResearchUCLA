import React, { Component } from 'react';
import './style.scss';
import { makeCourseList } from '../../helpers'

class ResearchGroupCard extends Component {

	constructor(props){
		super(props);
		this.state={professor: props.professor, researchGroup: props.researchGroup, content: props.content, courses: props.courses};
	}
	
  render () {
    return (
    	<div className="card">
			<div className="card_professor">
				<p>{this.state.professor}</p>
			</div>
			<div className="card_research-group">
				<p>{this.state.researchGroup}</p>
			</div>
			<div className="card_content">
				<p>{this.state.content}</p>
			</div>
			<hr />
			<div className="card_courses">
				<p>Looking For:</p>
				<ul>
					{makeCourseList(this.state.courses).map((course, i)=> <li key={i}> {course} </li>)}
				</ul>
			</div>
		</div>
	);
  }
}

export default ResearchGroupCard;
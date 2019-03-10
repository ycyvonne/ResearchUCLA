import React, { Component } from 'react';
import './style.scss';
import { makeCourseList } from '../../helpers'

class ResearchGroupCard extends Component {

	constructor(props){
		super(props);
		this.state={professor: props.professor, researchGroup: props.researchGroup, content: props.content, courses: props.courses};
	}
	
  render () {

		console.log('this.state', this.state)
    return (
    	<div className="card">
			<div className="card-header">
				<p>{this.state.professor}</p>
			</div>
			<div className="card-title">
				<p>{this.state.researchGroup}</p>
			</div>
			<div className="card-body">
				<p>{this.state.content}</p>
			</div>
			<hr />
			<div className="card-footer">
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
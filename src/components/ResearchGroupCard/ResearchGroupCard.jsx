import React, { Component } from 'react';
import './style.scss';

class ResearchGroupCard extends Component {
  render () {
    return (
    	<div className="card">
			<div className="card_professor">
				<p>{this.props.professor}</p>
			</div>
			<div className="card_research-group">
				<p>{this.props.researchGroup}</p>
			</div>
			<div className="card_content">
				<p>{this.props.content}</p>
			</div>
			<hr />
			<div className="card_courses">
				<p>Looking For:</p>
				<ul>
					{this.props.courses.map((course)=> <li> {course} </li>)}
				</ul>
			</div>
		</div>
	);
  }
}

export default ResearchGroupCard;
import React, { Component } from 'react';
import './style.scss';
import { makeCourseList } from '../../helpers'

class ResearchGroupCard extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <p>{this.props.professor}</p>
                </div>
                <div className="card-title">
                    <p>{this.props.researchGroup}</p>
                </div>
                <div className="card-body">
                    <p>{this.props.content}</p>
                </div>
                <hr />
                <div className="card-footer">
                    <p>Looking For:</p>
                    <ul>
                        {makeCourseList(this.props.courses).map((course, i) => <li key={i}> {course} </li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ResearchGroupCard;
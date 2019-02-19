import React, { Component } from 'react';
import './style.scss';
import base from '../../base';

class ResearchGroupCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            professor: props.professor,
            researchGroup: props.researchGroup,
            content: props.content
        }
    }
    componentDidMount() {
        //const rg = this.state.researchGroup;
        // this.ref = base.syncState(rg + '/professor', {
        //     context: this,
        //     state: 'professor'
        // });
        // this.ref = base.syncState(rg + '/researchGroup', {
        //     context: this,
        //     state: 'researchGroup'
        // });
        this.ref = base.syncState('/content', {
            context: this,
            state: 'content'
        });
        // this.ref = base.syncState('${params}/courses', {
        //     context: this,
        //     state: 'courses'
        // });
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
        
    }
    render() {
        return (
            <div className="card">
                <div className="card_professor">
                    <p>{this.props.professor}</p>
                </div>
                <div className="card_research-group">
                    <p>{this.props.researchGroup}</p>
                </div>
                <div className="card_content">
                    <p>{this.state.content}</p>
                </div>
                
                {/* <div className="card_courses">
                    <p>Looking For:</p>
                    <ul>
                        {makeCourseList(this.props.courses).map((course)=> <li> {course} </li>)}
                    </ul>
                </div> */}
            </div>
        );
    }
}

export default ResearchGroupCard;
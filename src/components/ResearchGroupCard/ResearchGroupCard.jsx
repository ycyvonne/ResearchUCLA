import React, { Component } from 'react';
import './style.scss';
import base from '../../base';
import { timeout } from 'q';

class ResearchGroupCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: props.card,
        }
    }
    componentDidMount() {
        const rg = this.state.card.researchGroup;
        this.ref = base.syncState(rg, {
            context: this,
            state: 'card',
        });
        setTimeout(()=>{
            this.setState({
                card: {
                    ...this.state.card,
                    //professor: 'Boohoo'
                }
            })
        },0) // tricking the syncstate to add this new info
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
        
    }
    render() {
        return (
            <div className="card">
                <div className="card_professor">
                    <p>{this.state.card.professor}</p>
                </div>
                <div className="card_research-group">
                    <p>{this.state.card.researchGroup}</p>
                </div>
                <div className="card_content">
                    <p>{this.state.card.content}</p>
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
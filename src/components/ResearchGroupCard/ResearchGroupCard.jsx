import React, { Component } from 'react';
import './style.scss';
import vars from '../../styles/vars.scss';
import { makeCourseList } from '../../helpers'
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from '../Modal/Modal';
import base, { firebaseApp } from '../../base';

class ResearchGroupCard extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            modal: "hidden",
        }
    }

    menuOnClick = () => {
        var modalState = this.state.modal;
        if (modalState == "hidden") {
            modalState = "visible"
        } else {
            modalState = "hidden"
        }
        this.setState({
            modal: modalState,
        });
    }

    deleteOnClick = () => {
        var refKey = "/cards/" + this.props.researchGroup;
        console.log(refKey);
        const cardRef = firebaseApp.database().ref(refKey);
        cardRef.remove()
            .then(function () {
                console.log("Remove succeeded.")
            })
            .catch(function (error) {
                console.log("Remove failed: " + error.message)
            });
    }

    render() {
        return (
            <div className="card">
                <div className="card-button">
                    <Button backgroundColor={vars.graybackground} textColor="black" borderColor={vars.graybackground} onClick={this.menuOnClick}>
                        <FontAwesomeIcon icon="ellipsis-h" size="2x" color={vars.gray2}/>
                    </Button>
                </div>
                <div className="edit-modal">
                    <Modal borderColor={vars.gray1} backgroundColor="white" state={this.state.modal}>
                        <div className="options-wrapper">
                            <Button backgroundColor="white" textColor={vars.gray3} borderColor="white">
                                <p>EDIT</p>
                            </Button>
                        </div>
                        <div className="options-wrapper">
                            <Button backgroundColor="white" textColor={vars.gray3} borderColor="white" onClick={this.deleteOnClick}>
                                <p>DELETE</p>
                            </Button>
                        </div>
                    </Modal>
                </div>
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

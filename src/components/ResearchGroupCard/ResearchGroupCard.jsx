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
            menu: false,
            edit: false,
            researchGroupEdit: this.props.researchGroup,
            researchGroup: this.props.researchGroup,

        }
    }

    menuOnClick = () => {
        var menuState = this.state.menu;
        if (menuState === false) {
            menuState = true;
        } else {
            menuState = false;
        }
        this.setState({
            menu: menuState,
        });
    }

    editOnClick = () => {
        var editState = this.state.edit;
        var menuState;
        if (editState === false) {
            editState = true;
            menuState = false;
        } else {
            editState = false
        }
        this.setState({
            edit: editState,
            menu: menuState,
        });
    }

    closeEditOnClick = () => {
        this.setState({
            edit: false,
            researchGroupEdit: this.state.researchGroup,
        });
        var researchGroupEdit = this.refs.researchGroupEdit;
        var originalResearchGroup = this.state.researchGroup;
        researchGroupEdit.value = originalResearchGroup;
    }

    deleteOnClick = () => {
        var refKey = "/cards/" + this.props.researchGroup;
        const cardRef = firebaseApp.database().ref(refKey);
        console.log(cardRef);
        cardRef.remove()
            .then(function () {
                console.log("Remove succeeded.")
            })
            .catch(function (error) {
                console.log("Remove failed: " + error.message)
            });
    }

    closeMenuModal = () => {
        this.setState({
            menu: false,
        })
    }

    handleChange = (e) => {
        // Update values of card 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.setState({
            researchGroup: this.state.researchGroupEdit,
            edit: false,
        })
        e.preventDefault();
    }

    render() {
        return (
            <div className="card">
                <div className="card-button">
                    <Button backgroundColor={vars.graybackground} textColor={vars.gray2} borderColor={vars.graybackground} onClick={this.menuOnClick}
                        hoverTextColor="black">
                        <FontAwesomeIcon icon="ellipsis-h" size="2x" />
                    </Button>
                </div>
                <div className="options-modal">
                    <Modal borderColor={vars.gray1} background_color="white" open={this.state.menu} 
                        closeModal={this.closeMenuModal} type="in-place">
                        <div className="options-wrapper">
                            <Button backgroundColor="white" textColor={vars.gray3} borderColor="white" onClick={this.editOnClick}>
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
                {/* https://reactjs.org/docs/forms.html
                https://css-tricks.com/intro-firebase-react/ */}
                <div className="edit-modal">
                    <Modal borderColor={vars.gray1} background_color="white" open={this.state.edit} 
                        closeModal={this.closeEditOnClick} type="entire-screen" blur={true}>
                        <div className="close-edit-button">
                            {/* <Button backgroundColor="white" textColor={vars.gray2} borderColor="white" onClick={this.closeEditOnClick}
                                hoverTextColor="black">
                                <FontAwesomeIcon icon="times" size="2x" />
                            </Button> */}
                        </div>
                        <div className="modal-content">
                            <p>Edit Information</p>
                            <form>
                                <div className="group-name">
                                    <label >
                                        Group Name
                                        <br/>
                                    <textarea
                                            name="researchGroupEdit"
                                            ref="researchGroupEdit"
                                            type="text"
                                            onChange={this.handleChange}>
                                            {this.props.researchGroup}
                                        </textarea>
                                    </label>
                                </div>
                                <div className="group-content">
                                    <label>
                                        Description
                                <br />
                                        <textarea
                                            name="content">
                                            {this.props.content}
                                        </textarea>
                                    </label>
                                </div>
                                <div className="group-courses">
                                    <lable>
                                        Suggested Courses:
                                <br />
                                        <textarea
                                            name="courses">
                                            {/* {makeCourseList(this.props.courses).map((course, i) => <li key={i}> {course} </li>)} */}
                                        </textarea>
                                    </lable>
                                </div>
                                <div className="save-button">
                                    <Button backgroundColor="white" textColor={vars.gray2} borderColor="white" onClick={this.handleSubmit}
                                        hoverTextColor="black">
                                        <p>Save</p>
                                    </Button>
                                </div>
                            </form>
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

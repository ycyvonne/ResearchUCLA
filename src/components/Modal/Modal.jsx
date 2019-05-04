import React, { Component } from 'react';
import './style.scss';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state= {
            open: this.props.open
        }         
    }

    componentWillReceiveProps(nextProps) {
        this.setState({open: nextProps.open})
    }

    show = () => {
        this.setState({ open: true });
        document.body.classList.add('modal-visible');
    }

    close = () => {
        this.setState({ open: false });
        document.body.classList.remove('modal-visible');
        this.props.closeModal();
    }


    handleClick= (e)=> {
        if (e.target.className === "modal-wrapper") {
            this.close();
        }
    }

    render() {
        return (
            <div>
                <div style={{display: + this.state.open ? 'inline' : 'none'}} onClick={this.handleClick}>
                    <div className="modal-filter"/>
                    <div className="modal-wrapper">
                        <div className="modal" >
                            <div className="button-wrapper">
                                <p className="close-button" onClick={this.close} >x</p>
                            </div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
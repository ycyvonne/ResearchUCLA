import React, { Component } from 'react';
import './style.scss';
import { visible } from 'ansi-colors';

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal-div"
                style={{backgroundColor: this.props.backgroundColor,
                        color: this.props.textColor,
                        borderColor: this.props.borderColor,
                        visibility: this.props.state}}
                onClick={this.props.onClick}>
                {this.props.children}
            </div>
        )
    }
}
export default Modal;
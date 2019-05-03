import React, { Component } from 'react';
import './style.scss';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="button-div"
                style={{backgroundColor: this.props.backgroundColor,
                        color: this.props.textColor,
                        borderColor: this.props.borderColor }}
                onClick={this.props.onClick}>
                {this.props.children}
            </div>
        )
    }
}
export default Button;
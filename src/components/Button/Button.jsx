import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="button-div" onClick={this.props.onClick}
                style={{backgroundColor: this.props.backgroundColor,
                        color: this.props.textColor,
                        "border-color": this.props.borderColor }}>
                {this.props.children}
            </div>
        )
    }
}
export default Button;
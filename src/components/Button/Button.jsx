import React, { Component } from 'react';
import './style.scss';

class Button extends Component {
    render() {
        return (
            <div className="button-div"
                style={{backgroundColor: this.props.backgroundColor,
                        color: this.props.textColor,
                        borderColor: this.props.borderColor,
                        "&:hover": {
                            backgroundColor: "red",
                            color: this.props.hoverTextColor
                        }}}
                onClick={this.props.onClick}>
                {this.props.children}
            </div>
        )
    }
}
export default Button;
import React, { Component } from 'react';
import './style.scss';
import "../../styles/vars.scss";
import Button from "../Button/Button";
import vars from '../../styles/vars.scss';
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state= {
            open: this.props.open,  // bool: true, false
            type: this.props.type,  //string: entire-screen, in-place
            background_color: this.props.background_color, // the hex value
            blur: this.props.blur, // true, false
            display_close_button: this.props.display_close_button //true, false
        }         
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open,
            type: nextProps.type,  
            background_color: nextProps.background_color,
            blur: nextProps.blur ,
            display_close_button: nextProps.display_close_button
        })
    }

    show = () => {
        document.addEventListener('click', this.handleClick);
        if (this.state.type === 'entire-screen')
            document.body.classList.add('modal-visible-entire-screen');
        else
            document.body.classList.add('modal-visible-in-place');
    }

    close = () => {
        this.setState({ open: false },() => {
            document.removeEventListener('click', this.handleClick);
          });
        if (this.state.type === 'entire-screen')
            document.body.classList.remove('modal-visible-entire-screen');
        else
            document.body.classList.remove('modal-visible-in-place');
        this.props.closeModal();
    }


    handleClick= (e)=> {
        if (this.node.contains(e.target)){
            return;
        }

        this.close();
    }

    render() {

        if(this.state.open)
            this.show();
        return this.state.type==='entire-screen'?(
            <div>
                <div style={{display: this.state.open ? 'inline' : 'none'}} >
                    <div style={{display: this.state.blur ? 'inline' : 'none'}} className="modal-filter" />
                    <div className="modal-wrapper">
                        <div ref={node=>{this.node=node}} style={{background: this.state.background_color}} className="modal" >
                            <div className="button-wrapper" style={{display: this.state.display_close_button ? 'block' : 'none'}} >
                                <Button backgroundColor="white" textColor={vars.gray2} borderColor="white" onClick={this.close}
                                    hoverTextColor="black">
                                    <FontAwesomeIcon icon="times" size="2x" />
                                </Button>
                            </div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        ):
        (
            <div>
                <div  style={{display: this.state.open ? 'inline' : 'none'}} >
                    <div ref={node=>{this.node=node}} className="inline-modal-wrapper">
                        <div  style={{background: this.state.background_color}}className="modal" >
                            <div className="button-wrapper" style={{display: this.state.display_close_button ? 'block' : 'none'}}>
                                <Button  backgroundColor="white" textColor={vars.gray2} borderColor="white" onClick={this.close}
                                    hoverTextColor="black">
                                    <FontAwesomeIcon icon="times" size="2x" />
                                </Button>
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

Modal.defaultProps = {
    display_close_button: false
  }
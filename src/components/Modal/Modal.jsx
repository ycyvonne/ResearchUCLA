import React, { Component } from 'react';
import './style.scss';
import "../../styles/vars.scss";

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state= {
            open: this.props.open,  // color, type 
            type: this.props.type,  //entire-screen, in-place
            background_color: this.props.background_color, //color
            blur: this.props.blur // true, false
            
        }         
    }

    componentWillReceiveProps(nextProps) {
        this.setState({open: nextProps.open})
    }

    show = () => {
        this.setState({ open: true },() => {
            document.addEventListener('click', this.close);
          });
        document.body.classList.add('modal-visible');
    }

    close = () => {
        this.setState({ open: false },() => {
            document.removeEventListener('click', this.closeMenu);
          });
        document.body.classList.remove('modal-visible');
        this.props.closeModal();
    }


    handleClick= (e)=> {
    // if (e.target.className === "modal-wrapper") {
    //     this.close();
    // }
        if (!this.node.contains(e.target)){
            this.close();
        }
    }

    render() {
        return (
            <div>
                <div style={{display: this.state.open ? 'inline' : 'none'}} onClick={this.handleClick}>
                    <div style={{opacity: this.state.blur ? 0.80 : 0}} className="modal-filter" />
                    <div className="modal-wrapper">
                        <div ref={node=>{this.node=node}} style={{background: this.state.background_color, margin: this.state.type=='entire-screen'? 120 : 0}}className="modal" >
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
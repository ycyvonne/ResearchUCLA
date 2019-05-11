import React, { Component } from 'react';
import './style.scss';
import "../../styles/vars.scss";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        this.setState({
            open: nextProps.open,
            type: nextProps.type,  
            background_color: nextProps.background_color,
            blur: nextProps.blur 
        })
    }

    show = () => {
        document.addEventListener('click', this.handleClick);
        document.body.classList.add('modal-visible');
    }

    close = () => {
        this.setState({ open: false },() => {
            document.removeEventListener('click', this.handleClick);
          });
        document.body.classList.remove('modal-visible');
        this.props.closeModal();
    }


    handleClick= (e)=> {
    // if (e.target.className === "modal-wrapper") {
    //     this.close();
    // }
        if (this.node.contains(e.target)){
            return;
        }

        this.close();
    }

    render() {

        {if(this.state.open)
            this.show()}
        const mdl=this.state.type=='entire-screen'?(
            <div>
                <div style={{display: this.state.open ? 'inline' : 'none'}} >
                    <div style={{display: this.state.blur ? 'inline' : 'none'}} className="modal-filter" />
                    <div className="modal-wrapper">
                        <div ref={node=>{this.node=node}} style={{background: this.state.background_color}}className="modal" >
                            <div className="button-wrapper">
                            <FontAwesomeIcon
                            className= "close-button"
                            icon={faTimesCircle}  onClick={this.close}/>
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
                            <div className="button-wrapper">
                            <FontAwesomeIcon
                            className= "close-button"
                            icon={faTimesCircle}  onClick={this.close}/>
                            </div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
            
        
        return mdl;
    }
}

export default Modal;
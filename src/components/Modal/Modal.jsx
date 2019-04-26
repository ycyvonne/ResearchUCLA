import React, { Component } from 'react';
import './style.scss';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state= {
            open: this.props.open
        }         
    }

    show = () => {
        this.setState({ open: true });
        document.body.classList.add('modal-visible');
    }

    close = (e) => {
        e.preventDefault();
        this.setState({ open: false });
        document.body.classList.remove('modal-visible');
    }


    handleClick= (e)=> {
        if (e.target.className === 'modal') {
            this.close(e);
        }
    }
    
    componentDidMount(){
        this.show();
    }

    render() {
        return (
            <div>
                <div style={{display: + this.state.open ? 'inline' : 'none'}} onClick={this.handleClick}>
                {console.log(this.state.open)}
                    <div className="modal">
                        <div className="modal-content" >
                            <p>Just a random modal!</p>
                        </div>
                    </div>
                    <div className="modal-filter"/>
                </div>
            </div>
        );
    }
}

export default Modal;
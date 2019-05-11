import React, { Component } from 'react';
import './style.scss';
import NavBar from '../../components/NavBar/NavBar';

// The Page Component appropriately renders the NavBar and any children components

class Page extends Component {

    render() {
        return (
            <div className = "page">
                <NavBar />
                {this.props.children}
            </div> 
        )

    }
}
export default Page;
import React from 'react';
import './style.scss';
import NavBar from '../../components/NavBar/NavBar';

// The Page Component appropriately renders the NavBar and any children components

const Page = (props) => (
    <div className = "default-page" >
        <NavBar> </NavBar>
        {props.children}
    </div>
)

export default Page;
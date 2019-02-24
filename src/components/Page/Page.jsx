import React, { Component } from 'react';
import './style.scss';
import NavBar from '../../components/NavBar/NavBar';

const Page = (props) => (
    <div className = "default-page" >
        <NavBar> </NavBar>
        {props.children}
    </div>
)

export default Page
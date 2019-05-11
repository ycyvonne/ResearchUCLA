import React, { Component } from 'react';
import uclaLogo from '../../ucla-samueli-logo-white.png';
import './NavBar.scss';
import Button from '../Button/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './style.scss';
import Button from '../Button/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        };
    }

    moveMenu = () => {
        document.getElementById("navbar-wrapper").classList.toggle('toggled');
    }

    toggleMenu = () => {
        this.setState({
            toggled: !this.state.toggled
        })
    }

    toggleMenuMobile = () => {
        this.toggleMenu();
        this.moveMenu();
    }

    loginButton = () => {
        console.log("Login button clicked!");
    }

    render() {
        return (
            <div>
                <div id="navbar-wrapper" className={this.state.toggled ? "toggled mobile-only " : "mobile-only"}>
                    <div id="toggleButton">
                        <Button onClick={this.toggleMenuMobile} backgroundColor="black" textColor="white">
                            <FontAwesomeIcon icon="bars" size="3x"/>
                        </Button>
                    </div>
                    <div id="title-mobile">
                        <style>@import url('https://fonts.googleapis.com/css?family=Montserrat');</style>
                        <Link to="/">
                            <h1>ARTIFICIAL INTELLIGENCE + <br />
                                MACHINE LEARNING
                        </h1>
                        </Link>
                    </div>
                    <div id="menu-mobile">
                        <div id="menu-item-wrapper-mobile">
                            <div className="menu-item-mobile">
                                <Link to="/research"><p>RESEARCH</p></Link>
                            </div>
                            <div className="menu-item-mobile">
                                <Link to="/faculty"><p>FACULTY</p></Link>
                            </div>
                            <div className="menu-item-mobile">
                                <Link to="/resources"><p>RESOURCES</p></Link>
                            </div>
                            <div className="menu-item-mobile">
                                <Link to="/news"><p>NEWS</p></Link>
                            </div>
                        </div>
                    </div>
                    {/* <Button onClick={this.loginButton} backgroundColor="#8caaaf" textColor="#ffcac1" borderColor="#c1ffef">
                        <p>EXAMPLE</p>
                    </Button> */}
                </div>

                <div id="navbar-wrapper" className="desktop-only">
                    <div id="navbar">
                        <div id="title">
                            <style>@import url('https://fonts.googleapis.com/css?family=Montserrat');</style>
                            <Link to="/">
                                <h1>ARTIFICIAL INTELLIGENCE + <br />
                                    MACHINE LEARNING
                        </h1>
                            </Link>
                        </div>
                        <div id="logo">
                            <img src={uclaLogo} />
                        </div>
                        <div id="menu">
                            <div className="menu-item">
                                <Link to="/research"><p>RESEARCH</p></Link>
                            </div>
                            <div className="menu-item">
                                <Link to="/faculty"><p>FACULTY</p></Link>
                            </div>
                            <div className="menu-item">
                                <Link to="/resources"><p>RESOURCES</p></Link>
                            </div>
                            <div className="menu-item">
                                <Link to="/news"><p>NEWS</p></Link>
                            </div>
                        </div>
                        <div className="menu-item">
                            <Link to="/admin"><p>ADMIN</p></Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/login"><p>LOGIN</p></Link>
                        </div>
                        <Button onClick={this.loginButton}>
                            <p>LOGIN</p>
                        </Button>
                        <Button onClick={this.loginButton} backgroundColor="#8caaaf" textColor="#ffcac1" borderColor="#c1ffef"
                                hoverTextColor="blue">
                            <p>EXAMPLE</p>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;

import React, { Component } from 'react';
import uclaLogo from '../../ucla-samueli-logo-white.png';
import './NavBar.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import base from '../../base';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            width: window.innerWidth,
        };
    }

    componentDidMount() {
        this.toggleMenu();
        window.addEventListener("resize", this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    moveMenu = () => {
        if (this.state.toggled) {
            document.getElementById("menu-mobile").style.transform = "translateX(-100%)";
            document.getElementById("toggleButton").style.transform = "rotate(90deg)";
        }
        else {
            document.getElementById("menu-mobile").style.transform = "translateX(0%)";
            document.getElementById("toggleButton").style.transform = "rotate(0deg)";
        }
    }

    handleWindowSizeChange = () => {
        this.setState({
            width: window.innerWidth,
            toggled: true,
        })
    };

    toggleMenu = () => {
        this.setState({
            toggled: !this.state.toggled
        }, () => {
            console.log('state was changed!', this.state.toggled)
        })
        if (this.state.width <= 800) {
            this.moveMenu();
        }
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 800;
        if (isMobile) {
            return (
                <div id="navbar-wrapper">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
                    <button id="toggleButton" onClick={this.toggleMenu}>
                        <i className="fas fa-bars fa-2x"></i>
                    </button>
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

                </div>
            );
        }
        else {
            return (
                <div id="navbar-wrapper">
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

                    </div>
                </div>

            );
        }
    }
}

export default NavBar;

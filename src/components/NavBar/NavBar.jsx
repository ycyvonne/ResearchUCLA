import React, { Component } from 'react';
import uclaLogo from '../../ucla-samueli-logo-white.png';
import './NavBar.scss';
import { BrowserRouter as  Link } from "react-router-dom";

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
        }, () => {
            console.log('state was changed!', this.state.toggled);
        })
    }

    toggleMenuMobile = () => {
        this.toggleMenu();
        this.moveMenu();
    }

    render() {
        return (
            <div>
            <div id="navbar-wrapper" className={this.state.toggled ? "toggled mobile-only " : "mobile-only"}>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
                <button id="toggleButton" onClick={this.toggleMenuMobile}>
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
                        <img src={uclaLogo} alt="UCLA" />
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
            </div>
        );
    }
}

export default NavBar;

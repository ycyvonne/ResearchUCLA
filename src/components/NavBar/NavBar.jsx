import React, { Component } from 'react';
import uclaLogo from '../../ucla-samueli-logo-white.png';
import './NavBar.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

    handleWindowSizeChange = () => {
        this.setState({
            width: window.innerWidth
        })
    };

    toggleMenu = () => {
        this.setState({
            toggled: !this.state.toggled
        }, () => {
            console.log('state was changed!', this.state.toggled)
        })

        if (this.state.width <= 760) {
            if (!this.state.toggled) {
                document.getElementById("menu-mobile").style.width = "50%";
            }
            else {
                document.getElementById("menu-mobile").style.width = "0";
            }
        }

    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 760;
        if (isMobile) {
            return (
                <Router>
                    <div id="navbar-wrapper">
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
                        <button id="toggleButton" onClick={this.toggleMenu}>
                            <i class="fas fa-bars fa-2x"></i>
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
                            {this.state.toggled && <div id="menu-item-wrapper-mobile">
                                <div className="menu-item-mobile">
                                    <Link to="/research">RESEARCH</Link>
                                </div>
                                <div className="menu-item-mobile">
                                    <Link to="/faculty">FACULTY</Link>
                                </div>
                                <div className="menu-item-mobile">
                                    <Link to="/resources">RESOURCES</Link>
                                </div>
                                <div className="menu-item-mobile">
                                    <Link to="/news">NEWS</Link>
                                </div>

                            </div> }
                        {!this.state.toggled}
                        </div>
                    </div>
                </Router>
                    );
                }
        else {
            return (
                <Router>
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
                                        <Link to="/research">RESEARCH</Link>
                                    </div>
                                    <div className="menu-item">
                                        <Link to="/faculty">FACULTY</Link>
                                    </div>
                                    <div className="menu-item">
                                        <Link to="/resources">RESOURCES</Link>
                                    </div>
                                    <div className="menu-item">
                                        <Link to="/news">NEWS</Link>
                                    </div>
                                    {/* <Route path="/research" component={Research} /> */}
                                    {/* <Route path="/faculty" component={Faculty} /> */}
                                </div>

                            </div>
                        </div>
                    </Router>
                    );
                }
            }
        }
        
        export default NavBar;

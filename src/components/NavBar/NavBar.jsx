import React, { Component } from 'react';
import uclaLogo from '../../ucla-samueli-logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './NavBar.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        }
    }

    componentDidMount() {
        this.toggleMenu();
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        let currentWidth = (window.innerWidth <= 760);
        if (!currentWidth) {
            this.setState({
                toggled: true
            })
            document.getElementById("toggleButton").style.left = "30%";
        }
    }

    toggleMenu = () => {
        this.setState({
            toggled: !this.state.toggled
        }, () => {
            console.log('state was changed!', this.state.toggled)
        })
        if (this.state.toggled) {
            document.getElementById("toggleButton").style.left = 0;
        }
        else {
            document.getElementById("toggleButton").style.left = "30%";
        }
    }

  render() {
    return (
        <Router>
        <div id="navbar-wrapper">
            <button id="toggleButton" onClick={this.toggleMenu}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            {this.state.toggled && <div id="navbar"> 
                    <div id="title">
                        <style>@import url('https://fonts.googleapis.com/css?family=Montserrat');</style>
                        <Link to="/">
                            <h1>ARTIFICIAL INTELLIGENCE + <br/>
                                MACHINE LEARNING
                            </h1>
                        </Link>
                    </div>
                    <div id="logo">
                        <img src = {uclaLogo}/>
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
               
            </div>}
            {!this.state.toggled }
        </div>
        </Router>
    );
  }
}

export default NavBar;

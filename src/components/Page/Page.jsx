import React, { Component } from 'react';
import './style.scss';
import NavBar from '../../components/NavBar/NavBar';

// The Page Component appropriately renders the NavBar and any children components

class Page extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: window.width
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleWindowSizeChange);
    }

  componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
      this.setState({
          width: window.innerWidth,
      })
  };

    render() {
        const { width } = this.state;
        const isMobile = width <= 800;
        return (
        <div className = { isMobile ? "mobile-page":"default-page"}>
        <NavBar> </NavBar>
        {this.props.children}
    </div> 
        )

    }

    
    

}
export default Page;
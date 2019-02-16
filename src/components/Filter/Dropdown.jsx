import React, { Component } from 'react';
import './style.scss';
import Checkbox from './Checkbox'


export default class Dropdown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          options: this.props.options,
          width: window.width
        };
      }

    componentDidMount() {
      //  this.toggleMenu();
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
    createCheckbox = option => (
        <Checkbox
                label={option.category}
                key={option.category}
                addSelectedItem={this.addSelectedItem}
                selected={option.selected}
                addFilter={this.addFilter}
            />
    )

    createCheckboxes = () => (
        this.state.options.map(this.createCheckbox)
    )
    addSelectedItem = (item, selected) => {
        for (let i =0; i < this.props.options.length; i++ ) {
                if (this.props.options[i].category === item) {
                    this.props.options[i].selected = selected;
                }
        }
        this.setState({
            options: this.props.options
        })
        this.addFilter();
    }
    clearAll = () => {
        const newOptions = [...this.state.options];
        for (let i =0; i < newOptions.length; i++ ) {
                    newOptions[i].selected = false
        }
        this.setState({
            options: newOptions
        })
        this.props.loadFilteredOptions([])

    }

    addFilter(){
        let filterList = this.state.options
        let array = []
        for ( let i =0; i < filterList.length; i++ ) {
            if (filterList[i].selected) {
                array.push(filterList[i].category)
            }
    }
        this.props.loadFilteredOptions(array)
    }

    render() {
    const { width } = this.state;
    const isMobile = width <= 800;
        return (
            <div className= { isMobile ? "mobile-dropdown":"dropdown"} >
           {  this.props.visible === this.props.label && (
             <div className= "dropdown-wrapper">
                <ul className="list" >
                    {this.createCheckboxes()}
                </ul>
            <div className="clear" onClick={() => this.clearAll()}> Clear all </div>
            </div> )
           }
            </div>
        )

    }

    
}
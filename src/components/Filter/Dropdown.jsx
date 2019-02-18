import React, { Component } from 'react';
import './style.scss';
import Checkbox from './Checkbox'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Dropdown extends Component {
    constructor(props){
        super(props)
        this.state = {
          options: this.props.options,
          width: window.width
        };
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
            <div className= { this.props.visible === this.props.label ? "opacity-visible": "opacity-invisible" }
            onMouseOver={ () => this.props.toggleList(this.props.label)} onMouseOut={ () => this.props.toggleList('') }
            >
            <div className= { isMobile ? "mobile-dropdown":"dropdown" } >
             <div className= "dropdown-wrapper">
        { isMobile && <FontAwesomeIcon className= "icon" icon={faTimesCircle} size="1x" onClick={() => this.props.toggleList('')} /> }
                <ul className="list" >
                    {this.createCheckboxes()}
                </ul>
            <div className="clear" onClick={() => this.clearAll()}> Clear all </div>
            </div> 
            </div>
            </div>
        )

    }

    
}
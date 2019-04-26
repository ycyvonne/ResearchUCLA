import React, { Component } from 'react';
import './style.scss';
import Modal from '../../components/Modal/Modal';


class ResourcesPage extends Component {

    constructor(props){
        super(props);
        this.state={
            modalOpened: false
        }
    }
    openModal= ()=>{
        this.setState({modalOpened : true});
    }
    render() {
        return (
            <div id="ResourcesPage-wrapper">
                {/* <button  onClick={this.openModal}>Open Sesame!</button>
                {console.log(this.state)} */}
                <Modal open={true} />
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
                <h1>This is ResourcesPage</h1>
            </div>
        );
    }
}
export default ResourcesPage;
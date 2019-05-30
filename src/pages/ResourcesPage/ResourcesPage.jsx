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
        this.setState({modalOpened : true}, () => {
            console.log('set state to be', this.state.modalOpened);
        });
        
    }

    closeModal= ()=>{
        this.setState({modalOpened : false}, () => {
            console.log('set state to be', this.state.modalOpened);
        });
        
    }

    render() {
        
        return (
            <div id="ResourcesPage-wrapper">
                <button  onClick={this.openModal}>Open Sesame!</button>
                {console.log(this.state)}
                <div style={{width: "300px" , height: "135px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Modal type="entire-screen" blur={true} background_color= "white" open={this.state.modalOpened} closeModal={this.closeModal} display_close_button={true}> 
                        jhfgh
                    </Modal>
                </div>
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
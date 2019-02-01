import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'
import SubmitForm from '../SubmitForm/SubmitForm'
import './Modal.css'

export default class ModalForm extends Component {
  constructor(props){
    super(props)
    this.state= {
      modalShow: false,
    }
    this.handlemodalShow = this.handlemodalShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  //handle close modal
  handleClose() {
    this.setState({ modalShow: false });
  }
  //handle modalShow modal
  handlemodalShow() {
    this.setState({ modalShow: true });
  }

  render(){

    return(

      <Modal modalShow={this.state.modalShow} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fishtopia</Modal.Title>
        </Modal.Header>
        <div className="modal-form">
        <Modal.Body>
          <SubmitForm />
        </Modal.Body>
        </div>
        <Modal.Footer>
          <Button bsStyle="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button bsStyle="primary" onClick={this.handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

    )
  }

}

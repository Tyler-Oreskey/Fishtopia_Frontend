import React, { Component } from 'react';
import {Gmaps, Marker} from 'react-gmaps';
import { GoogleComponent } from 'react-google-location'
import { Container } from 'reactstrap'
import { Button, Modal } from 'react-bootstrap'
import SubmitForm from '../components/SubmitForm/SubmitForm'
import './styles/GoogleMaps.css'

const apiKey = 'AIzaSyDysvmNwccnv7MkNHYRdLkfZc7KKtHYFkQ'

const params = {v: '3.exp', key: apiKey};

class GoogleMaps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      place: 'Colorado, USA',
      lat: 39.5500507,
      lng: -105.7820674,
      zoom: 4
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    return (
      <div>
        <Button bsStyle="primary" onClick={this.handleShow}>
          Post a Fish
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
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

        <Container className='map-container'>
        <div className="col-md-8">
          <div className='input'>
            <GoogleComponent
              apiKey={apiKey}
              language={'en'}
              country={'country:us'}
              coordinates={true}
              onChange={(e) => { this.setState({
                place: e,
                lat: e.coordinates.lat,
                lng: e.coordinates.lng,
                zoom: 7
              })
            }}/>
          </div>

          <div className='map'>
            <Gmaps
              width={'800px'}
              height={'600px'}
              lat={this.state.lat}
              lng={this.state.lng}
              zoom={this.state.zoom}
              loadingMessage={'Fishtopia'}
              params={params}
              onMapCreated={this.onMapCreated}>
            <Marker
              lat={this.state.lat}
              lng={this.state.lng}
              draggable={true}
              onDragEnd={this.onDragEnd} />
          </Gmaps>
        </div>
        </div>
      </Container>
      </div>
    );
  }
}
export default GoogleMaps;

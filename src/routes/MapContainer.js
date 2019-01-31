import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import { GoogleComponent } from 'react-google-location'
import { Container } from 'reactstrap'
import { Button, Modal } from 'react-bootstrap'
import SubmitForm from '../components/SubmitForm/SubmitForm'
import './styles/GoogleMaps.css'


const apiKey = 'AIzaSyDysvmNwccnv7MkNHYRdLkfZc7KKtHYFkQ'
const params = {v: '3.exp', key: apiKey};
const google = window.google

class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      markers: [],
      show: false,
      place: 'Colorado, USA',
      lat: 39.5500507,
      lng: -105.7820674,
      zoom: 4

    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.searchLocation = this.searchLocation.bind(this)
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
    });
  }

  searchLocation(e){
    this.setState({
      ...this.state,
      place: e,
      lat: e.coordinates.lat,
      lng: e.coordinates.lng,
      zoom: 12,
    })
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleToggleOpen() {
    this.setState({
      isOpen: true
    });
  }

  render() {

    return (
      <div>
        <Button bsStyle="primary" onClick={this.handleShow}>
          Create New Post
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
              onChange={this.searchLocation}/>
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
              onMapCreated={this.onMapCreated}
              >

            <Marker
              lat={this.state.lat}
              lng={this.state.lng}
              draggable={true}
              onDragEnd={this.onDragEnd}
              onClick={() => this.handleToggleOpen()}
              icon={{
                url: 'https://maps.google.com/mapfiles/kml/shapes/fishing.png',
                size: {width: 60, height: 100},
                anchor: {x: 15, y: 50},
                scaledSize: {width: 30, height: 50},
              }}>

              <InfoWindow
                onCloseClick={() => this.setState({isOpen: false})}>
                  <h4>{this.state.place}</h4>
              </InfoWindow>

          </Marker>
          </Gmaps>
        </div>
        </div>
      </Container>
      </div>
    );
  }
}
export default MapContainer

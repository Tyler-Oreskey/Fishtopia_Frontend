import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GoogleComponent } from 'react-google-location'
import { Container } from 'reactstrap'
import { Button, Modal } from 'react-bootstrap'
import './styles/MapContainer.css'

import store from '../Store'

import SubmitForm from '../components/SubmitForm/SubmitForm'

const apiKey = 'AIzaSyDysvmNwccnv7MkNHYRdLkfZc7KKtHYFkQ'
// var google = window.google

class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      userPlaces: [],
      show: store.getState().show,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      markers: [
        {
          position: {
            lat: 39.5500507,
            lng: -105.7820674,
          }
        }
      ],
      zoom: 4
    };
  }

  componentDidMount() {
  // hook up callback from store when it's changed
  this.unsubscribe = store.onChange(() => {
      this.setState({
        show: store.getState().show,
      })
    });
    store.setState({ handleShow: this.handleShow });
  }



  // grab users location after selection and set it to state
  searchLocation = (e) => {
    this.setState({
      markers: [
        {
          place: e,
          position: {
            lat: e.coordinates.lat,
            lng: e.coordinates.lng,
          },
        }
      ],
      zoom: 8,
    })
  }

  //save marker lat and lng if user moves it
  onMarkerMoved = (coord, index) => {
     const { latLng } = coord;
     const lat = latLng.lat();
     const lng = latLng.lng();
     const currentMarkers = this.state.markers.slice();
     const currentPosition = currentMarkers[0].position;
     currentPosition.lat = lat;
     currentPosition.lng = lng;

     this.setState({
       markers: currentMarkers,
     });
  }

  //close marker window if map is clicked
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  //show info window when marker is clicked
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  //closes modal
  handleClose() {
    this.setState({ show: false });
  }

  //shows modal
  handleShow() {
    this.setState({ show: true });
  }

  //allows for event listener to be placed within info window
  windowHasOpened(props, e) {
    const button = (<Button bsStyle="primary" onClick={this.handleShow}>Post a Fish</Button>);
    ReactDOM.render(React.Children.only(button), document.getElementById("iwc"));
  }

  //get request to grab all the posts from database
  async componentDidMount() {
    const postResponse = await fetch(`${process.env.REACT_APP_API_URL}/users_post`, {
      method: 'GET',
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        'Accept': 'application/JSON',
        'Content-Type': 'application/json'
      }
    })
    const postJson = await postResponse.json()
    this.setState({
      ...this.state,
      post: postJson
    })
    console.log('postjson', postJson);
  }

  //get user markers and display on map
  getUserPlacesHandler = (postJson) => {
    const placesArray = []
    for(const key in postJson){
      placesArray.push({
        lat: postJson[key].lat,
        lng: postJson[key].lng,
        id: key
      })
    }
    console.log('placesarray', placesArray);
    this.setState({
      userPlaces: placesArray
    })
  }

  render() {

    const showModal = store.getState().show
    const { markers } = this.state;
    const { position } = markers[0];
    const { lat, lng } = position;

    //dynamically create markers to be loaded onto maps using lat and lng pulled from user submission
    const userMarker = this.state.userPlaces.map(userPlace => (
      <Map.Marker coordinate={userPlace} key={userPlace.id} />
    ))

    return (
      <div>
          <Container className="maps-container">
          <Button bsStyle="primary" onClick={this.getUserPlacesHandler}>View all posts</Button>
            <div className="col-md-8">
                  <div className="input">
                    <GoogleComponent
                      apiKey={apiKey}
                      language={'en'}
                      country={'country:us'}
                      coordinates={true}
                      onChange={this.searchLocation}/>
                  </div>

                <div className="map">
                    <Map
                      google={this.props.google}
                      map={this.props.map}
                      initialCenter={{
                        lat,
                        lng
                      }}
                      zoom={this.state.zoom}
                      onClick={this.onMapClicked}
                    >
                    {this.state.markers.map((marker, index) =>
                      <Marker
                        key={index}
                        position={{
                          lat,
                          lng,
                        }}

                        draggable={true}
                        icon={{
                          url: 'https://maps.google.com/mapfiles/kml/shapes/fishing.png',
                          scaledSize: new this.props.google.maps.Size(30, 30), // scaled size
                          origin: new this.props.google.maps.Point(0,0), // origin
                          anchor: new this.props.google.maps.Point(0, 0)
                        }}
                        onDragend={(e, map, coord) => this.onMarkerMoved(coord, index)}
                        onClick={this.onMarkerClick}
                        name={marker.place}
                      />
                    )}

                      <InfoWindow
                        marker={this.state.activeMarker}
                        onOpen={e => {this.windowHasOpened(this.props, e)}}
                        onClose={this.onInfoWindowClose}
                        visible={this.state.showingInfoWindow}
                      >
                      <div id="iwc" />
                    </InfoWindow>

                    {userMarker}
                  </Map>

              </div>
            </div>
          </Container>

          <div className="modal">
          <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Fish Submission</Modal.Title>
              </Modal.Header>
              <Modal.Body><SubmitForm position={position} show={this.state.show}/></Modal.Body>
              <Modal.Footer>
                <Button bsStyle="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
    );
  }
}
const LoadingContainer = (props) => (
  <div>Fishtopia!</div>
)
export default GoogleApiWrapper({
  apiKey: (apiKey),
})(MapContainer)

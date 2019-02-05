import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GoogleComponent } from 'react-google-location'
import { Container } from 'reactstrap'
import { Button, Modal } from 'react-bootstrap'
import Helmet from 'react-helmet'
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
      usersPlaces: [],
      show: store.getState().show,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      openWindow: {},
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
    this.getUserPlacesHandler()
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
        activeMarker: null,
        openWindow: null,
      })
    }
  };

  //show info window when marker is clicked
  onMarkerClick = (userPlaceId) => (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      activeUserPlaceId: userPlaceId,
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

  //get user markers and display on map
  getUserPlacesHandler = () => {
    fetch(`${process.env.REACT_APP_API_URL}/users_post`)
    .then(res => res.json())
    .then(parsedRes => {

      const placesArray = []

      for(const key in parsedRes){
        placesArray.push({
          position: {
            lat: parsedRes[key].lat,
            lng: parsedRes[key].lng,
          },
          name: parsedRes[key].name,
          fish_name: parsedRes[key].fish_name,
          fish_size: parsedRes[key].fish_size,
          fishing_type: parsedRes[key].fishing_type,
          dry_fly: parsedRes[key].dry_fly,
          dry_size: parsedRes[key].dry_size,
          wet_fly: parsedRes[key].wet_fly,
          wet_size: parsedRes[key].wet_size,
          month: parsedRes[key].month,
          day: parsedRes[key].day,
          comments: parsedRes[key].comments,
          id: key
        })
      }
      this.setState({
        usersPlaces: placesArray
      })
      console.log('usersPlaces', this.state.usersPlaces);
    })
    .catch(err => console.log(err))
  }

  renderInfoWindows = () => {
    return this.state.usersPlaces.map(userPlace => (
      <InfoWindow
        key={userPlace.id}
        marker={this.state.activeMarker}
        onClose={this.onMarkerInfoWindowClose}
        visible={this.state.showingInfoWindow && this.state.activeUserPlaceId === userPlace.id}
      >
      <div>
        <span ClassName='label'>{'Name: '}{userPlace.name}</span><br /><br />
        <span ClassName='label'>{'Fish caught: '}{userPlace.fish_name}</span><br /><br />
        <span ClassName='label'>{'Fish size: '}{userPlace.fish_size}{' inches'}</span><br /><br />
        <span ClassName='label'>{'Fishing type: '}{userPlace.fishing_type}</span><br /><br />
        <span ClassName='label'>{'Dry fly used: '}{userPlace.dry_fly}</span><br /><br />
        <span ClassName='label'>{'Dry fly size: '}{userPlace.dry_size}</span><br /><br />
        <span ClassName='label'>{'Wet fly used: '}{userPlace.wet_fly}</span><br /><br />
        <span ClassName='label'>{'Wet fly size: '}{userPlace.wet_size}</span><br /><br />
        <span ClassName='label'>{'Month: '}{userPlace.month}</span><br /><br />
        <span ClassName='label'>{'Day: '}{userPlace.day}</span><br /><br />
        <span ClassName='label'>{'Comments: '}{userPlace.comments}</span>
      </div>
    </InfoWindow>
    ))
  }

  render() {
    const { markers } = this.state;
    const { position } = markers[0];
    const { lat, lng } = position;

    // dynamically create markers to be loaded onto maps using lat and lng pulled from user submission
    const usersMarkers = this.state.usersPlaces.map(userPlace => (
        <Marker
          key={userPlace.id}
          position={userPlace.position}
          draggable={false}
          onClick={this.onMarkerClick(userPlace.id)}
          icon={{
            url: 'https://maps.google.com/mapfiles/kml/shapes/fishing.png',
            scaledSize: new this.props.google.maps.Size(30, 30), // scaled size
            origin: new this.props.google.maps.Point(0,0), // origin
            anchor: new this.props.google.maps.Point(0, 0)
          }}
        />
    ))
    return (
      <div>
      <Helmet bodyAttributes={{style: 'background : linear-gradient(to right, #141e30, #243b55)'}}/>
        <div className="col-md-4">
          <Container className="steps"
            style={{
              'background': 'linear-gradient(to right, #283048, #859398)'
            }}>
          >

          <h1 className="post-title">Posting</h1>
            <ol>
              <li>Start by typing a location in the location bar.</li>
              <li>Once you've clicked on a location the map will zoom in on your chosen area.</li>
              <li>From here you can move the marker anywhere you like.</li>
              <li>Once you are satisfied with your marker placement, click on the fish marker.</li>
              <li>A submit form will open up and you just fill in the fields and click submit.</li>
            </ol>

          </Container>
        </div>

          <Container className="maps-container">
            <div className="col-md-8" id="map">
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
                    {usersMarkers}
                    {this.renderInfoWindows()}
                    {this.state.markers.map((marker, index) =>
                      <Marker
                        key={index}
                        position={{
                          lat,
                          lng,
                        }}
                        draggable={true}
                        icon={{
                          url: 'http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png',
                          scaledSize: new this.props.google.maps.Size(30, 30), // scaled size
                          origin: new this.props.google.maps.Point(0,0), // origin
                          anchor: new this.props.google.maps.Point(0, 0)
                        }}
                        onDragend={(e, map, coord) => this.onMarkerMoved(coord, index)}
                        onClick={this.onMarkerClick(null)}
                        name={marker.place}
                      />
                    )}

                      <InfoWindow
                        marker={this.state.activeMarker}
                        onOpen={e => {this.windowHasOpened(this.props, e)}}
                        onClose={this.onInfoWindowClose}
                        visible={this.state.showingInfoWindow && !this.state.activeUserPlaceId}
                      >
                      <div id="iwc" />
                    </InfoWindow>
                  </Map>
              </div>
            </div>
          </Container>

          <div className="modal">
          <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton
              style={{
                'background': 'linear-gradient(to right, #232526, #414345)',
                'color': 'white'
              }}>
                <Modal.Title>Fish Submission</Modal.Title>
              </Modal.Header>
              <Modal.Body
              style={{
                'background': 'linear-gradient(to right, #373b44, #4286f4)'
              }}>
              <SubmitForm position={position} show={this.state.show}/></Modal.Body>
              <Modal.Footer
              style={{
                'background': 'linear-gradient(to right, #232526, #414345)'
              }}>
              >
                <Button className="submit" bsStyle="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: (apiKey),
})(MapContainer)

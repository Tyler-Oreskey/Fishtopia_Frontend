import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GoogleComponent } from 'react-google-location'
import { Container } from 'reactstrap'
import { Button } from 'react-bootstrap'
import './styles/MapContainer.css'

const apiKey = 'AIzaSyDysvmNwccnv7MkNHYRdLkfZc7KKtHYFkQ'
// var google = window.google

class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      markers: [
        {
          place: 'Colorado, USA',
          position: {
            lat: 39.5500507,
            lng: -105.7820674,
          }
        }
      ]
    };
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
      zoom: 12,
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

  render() {
    const { markers } = this.state;
    const { place, position } = markers[0];
    const { lat, lng } = position;
    console.log(lat, lng);
    return (

      <div>
          <Container className="maps-container">
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
                      zoom={4}
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
                          url: 'http://maps.google.com/mapfiles/kml/shapes/fishing.png',
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
                        onOpen={this.windowHasOpened}
                        onClose={this.onInfoWindowClose}
                        visible={this.state.showingInfoWindow}
                      >
                      <div>
                        <Button bsStyle="primary" onClick={this.handleClick}>
                          Post a Fish
                        </Button>
                      </div>
                    </InfoWindow>

                  </Map>
              </div>
            </div>
          </Container>
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

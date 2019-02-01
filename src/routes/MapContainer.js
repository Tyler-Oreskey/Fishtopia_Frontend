import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GoogleComponent } from 'react-google-location'
import { Container } from 'reactstrap'
import { Button } from 'react-bootstrap'
import './styles/MapContainer.css'

const apiKey = 'AIzaSyDysvmNwccnv7MkNHYRdLkfZc7KKtHYFkQ'

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

     this.setState(prevState => {
      const markers = [...this.state.markers];
      markers[index] = { ...markers[index], position: { lat, lng } };
      return { markers };
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
    console.log(this.props);
    const { markers } = this.state;
    const { place, position } = markers[0];
    const { lat, lng } = position;
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
                        position={{
                          lat,
                          lng,
                        }}
                        draggable={true}
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

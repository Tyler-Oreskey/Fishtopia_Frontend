import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { GoogleComponent } from 'react-google-location'

const apiKey = 'AIzaSyDysvmNwccnv7MkNHYRdLkfZc7KKtHYFkQ'

class GoogleMaps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      place: null,
      lat: null,
      lng: null
    };
  }

  render() {
    console.log('place', this.state.place);
    console.log('lat', this.state.lat);
    console.log('lng', this.state.lng);
    return (
      <div className="wrapper" >
        <GoogleComponent
          apiKey={apiKey}
          language={'en'}
          country={'country:us'}
          coordinates={true}
          onChange={(e) => { this.setState({
            place: e,
            lat: e.coordinates.lat,
            lng: e.coordinates.lng
          })
        }}/>
      </div>
    );
  }
}
export default GoogleMaps;

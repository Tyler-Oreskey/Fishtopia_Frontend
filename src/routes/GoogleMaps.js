import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { GoogleComponent } from 'react-google-location'

const apiKey = 'AIzaSyDysvmNwccnv7MkNHYRdLkfZc7KKtHYFkQ'

const params = {v: '3.exp', key: apiKey};

class GoogleMaps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      place: 'Colorado, USA',
      lat: 39.5500507,
      lng: -105.7820674,
      zoom: 4
    };
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    console.log(this.state.place);

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
              lng: e.coordinates.lng,
              zoom: 7
            })
          }}/>

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
          <InfoWindow
            lat={this.state.lat}
            lng={this.state.lng}
            content={'form goes here'}
            onCloseClick={this.onCloseClick} />
          <Circle
            lat={this.state.lat}
            lng={this.state.lng}
            radius={500}
            onClick={this.onClick} />
        </Gmaps>
      </div>
    );
  }
}
export default GoogleMaps;

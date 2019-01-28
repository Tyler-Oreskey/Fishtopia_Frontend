import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { GoogleComponent } from 'react-google-location'
import { Container } from 'reactstrap'
import './styles/GoogleMaps.css'

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
    );
  }
}
export default GoogleMaps;

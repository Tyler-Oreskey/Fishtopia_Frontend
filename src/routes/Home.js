import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import * as $ from 'jquery'
import './styles/Home.css'

class Home extends Component {
  render() {
    return (
      <Carousel
        style={{
          'background': '#232526',
          'background': '-webkit-linear-gradient(to right, #232526, #414345)',
          'background': 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
          'background': 'linear-gradient(to right, #414345, #232526)',
        }}>

        <Carousel.Item>
           <img className='carousel-inner' width={900} height={500} alt="900x500" src={require('../photos/dad.jpg')} />
        </Carousel.Item>
        <Carousel.Item>
          <img className='carousel-inner' width={900} height={500} alt="900x500" src={require('../photos/dad.jpg')} />
        </Carousel.Item>
        <Carousel.Item>
          <img className='carousel-inner' width={900} height={500} alt="900x500" src={require('../photos/dad.jpg')} />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Home;

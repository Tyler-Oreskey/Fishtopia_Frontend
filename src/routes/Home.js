import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import './styles/Home.css'

class Home extends Component {
  render() {
    return (
      <Carousel
        style={{
          'background': 'linear-gradient(to right, #414345, #232526)'
        }}>

        <Carousel.Item>
           <img className='carousel-inner' width={900} height={500} alt="900x500" src={require('../photos/trout.jpg')} />
        </Carousel.Item>
        <Carousel.Item>
          <img className='carousel-inner' width={900} height={500} alt="900x500" src={require('../photos/flyrod.jpg')} />
        </Carousel.Item>
        <Carousel.Item>
          <img className='carousel-inner' width={900} height={500} alt="900x500" src={require('../photos/fisherman.jpg')} />
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default Home;

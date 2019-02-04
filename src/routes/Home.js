import React, { Component } from 'react';
import { Carousel, Row, Col, Grid, Button } from 'react-bootstrap';
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Redirect } from 'react-router-dom'
import './styles/Home.css'

import store from '../Store'

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: store.getState().name,
      toGooglePage: false
    }
  }


  onRedirect = () => {
    this.setState({
      toGooglePage: true
    })
  }

  render() {
    console.log('store state', store.getState());

    if (this.state.toGooglePage === true) {
      return <Redirect to='/gmaps' />
    }

    Container.propTypes = {
      fluid:  PropTypes.bool
    }

    return (
      <div className="home">
        <div className="info">
        <Helmet bodyAttributes={{style: 'background : linear-gradient(to right, #200122, #6f0000)'}}/>
            <div>
              <Container fluid={true} className="welcome"
                style={{
                  'background': 'linear-gradient(to right, #000000, #434343)'
                }}>
                <Container>
                <h1 className="welcome-title">Welcome to Fishtopia (users name)!</h1>
                <p className="welcome-text">Fishtopia cares about fellow fishermen and their struggle to find good areas to fish in an unfamiliar environment.
                  Go see what other users have posted and even post your own monster catch using Google Maps <Button bsStyle="primary" onClick={this.onRedirect}>Here</Button>
                </p>
                </Container>
              </Container>
            </div>
          </div>

          <Container>
              <Carousel
                className="carousel"
                style={{
                  'background': 'linear-gradient(to right, #200122, #6f0000)',
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
                <Carousel.Item>
                  <img className='carousel-inner' width={900} height={500} alt="900x500" src={require('../photos/bros.jpg')} />
                </Carousel.Item>
              </Carousel>
          </Container>
        </div>
    );
  }
}
export default Home;

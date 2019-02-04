import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap'
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Carousel, Row, Col, Grid, Button } from 'react-bootstrap';
import { Container } from 'reactstrap'
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';
import Helmet from 'react-helmet'
import './styles/Login.css'

import store from '../Store'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: store.getState().isLoggedIn,
      userID: store.getState().userID,
      name: store.getState().name,
      picture: store.getState().name
    }
  }

  responseFacebook = response => {
    console.log(response);
    store.setState({
      isLoggedIn: true,
      userId: response.userID,
      name: response.name,
      picture: response.picture.data.url
    })
  }


  render() {
    //
    // if (this.state.isLoggedIn === true && this.state.name !== undefined) {
    //   return <Redirect to='/home' />
    // }

      let fbContent;
        fbContent = (
        <FacebookLogin
         appId="2128265563899115"
         autoLoad={true}
         fields="name,picture"
         onClick={this.componentClicked}
         callback={this.responseFacebook} />
       )
      return(
        <div className="login-header">
        <Navbar
          style={{
            backgroundColor: '#000000',
            'height': '70px'
          }}
          inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand className="title">
                Fishtopia
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            </Navbar.Collapse>
          </Navbar>
          <div className="background">
          <Helmet bodyAttributes={{style: 'background : linear-gradient(to right, #f0f2f0, #000c40)'}}/>
            <div className="fishtopia-intro">
              <h1 className="big-text">Fishtopia</h1>
              <h2 className="small-text">Where Fishermen Catch Their Dreams</h2>
              <p className="login-text">Please login with Facebook to get started</p>
            </div>
            <div className="fbButton">
              {fbContent}
            </div>
          </div>
          <div>
          <Container>
              <Carousel
                className="carousel"
                style={{
                  'background': 'linear-gradient(to right, #200122, #6f0000)',
                }}>
                <Carousel.Item>
                   <img className='carousel-inner' width={900} height={500} alt="900x500" src={require('../photos/dad.jpg')} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-inner' width={900} height={500} alt="900x500" src={require('../photos/rob.jpg')} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-inner' width={900} height={500} alt="900x500" src={require('../photos/tyler1.jpg')} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-inner' width={900} height={500} alt="900x500" src={require('../photos/tyler2.jpg')} />
                </Carousel.Item>
              </Carousel>
          </Container>
          </div>
        <MDBFooter className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
                <ul className="footer-content">
                  <div className="footer-copyright text-center py-3">
                      &copy; {new Date().getFullYear()} Copyright: Fishtopia
                  </div>
                </ul>
            </MDBRow>
          </MDBContainer>
        </MDBFooter>
      </div>
      )
    }
}

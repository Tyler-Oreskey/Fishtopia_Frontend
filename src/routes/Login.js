import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap'
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import FacebookLogin from 'react-facebook-login';
import './styles/Login.css'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false,
      userID: '',
      name: '',
      picture: ''
    }
  }

  componentClicked = () => console.log('clicked')

  responseFacebook = response => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      userId: response.userID,
      name: response.name,
      picture: response.picture.data.url
    })
  }

  render() {
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
        {fbContent}
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

import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { BrowserRouter } from 'react-router-dom';


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
      if (this.state.isLoggedIn) {
        fbContent = (
          <div style={{
            width: '400px',
            margin: 'auto',
            background: 'white'
          }}>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          </div>
        )

      }else {
        fbContent = (
        <FacebookLogin
         appId="2128265563899115"
         autoLoad={true}
         fields="name,picture"
         onClick={this.componentClicked}
         callback={this.responseFacebook} />
       )
      }
      return(
        <div>{fbContent}</div>
      )
    }
}

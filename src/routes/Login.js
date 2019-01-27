import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false,
      userId: '',
      name: '',
      picture: ''
    }
  }

  responseFacebook = response => {
    console.log(response);
  }

  componentClicked = () => {
    console.log('clicked');
  }

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = null
    }else {
      fbContent = (
        <FacebookLogin
         appId="2128265563899115"
         autoLoad={true}
         fields="name,email,picture"
         onClick={this.componentClicked}
         callback={this.responseFacebook} />
      )
    }

    return (
      <div>
        {fbContent}
      </div>
    );
  }
}

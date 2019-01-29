import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'

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
        <div>{fbContent}</div>
      )
    }
}

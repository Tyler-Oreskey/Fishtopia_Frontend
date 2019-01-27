import React, { Component } from 'react';
import Facebook from '../components/FacebookLogin/FacebookLogin'
import Google from '../components/GoogleLogin/GoogleLogin'


class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Facebook />
      </div>
    );
  }
}

export default Login;

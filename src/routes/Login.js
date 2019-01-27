import React, { Component } from 'react';
import Facebook from '../components/FacebookLogin/FacebookLogin'

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

import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import GoogleAPI from './components/GoogleAPI/GoogleAPI'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>
      <GoogleAPI/>
      </div>
    );
  }
}

export default App;

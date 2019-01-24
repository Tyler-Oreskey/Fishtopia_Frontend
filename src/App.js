import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import MapContainer from './components/MapContainer/MapContainer'
import SubmitForm from './components/SubmitForm/SubmitForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <SubmitForm/>
      </div>
    );
  }
}

export default App;

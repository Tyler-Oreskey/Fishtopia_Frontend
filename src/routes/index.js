import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//route pages
import Login from './Login';
import Home from './Home';
import GoogleMaps from './GoogleMaps';
import PrivacyPolicy from './PrivacyPolicy'
import Header from '../components/Common/Header/Header';
import SubmitForm from '../components/SubmitForm/SubmitForm';

export default () =>
  (<BrowserRouter>
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/gmaps" component={GoogleMaps} />
          <Route exact path="/submitform" component={SubmitForm} />
          <Route exact path="/privacypolicy" component={PrivacyPolicy} />
        </Switch>
    </div>
  </BrowserRouter>)

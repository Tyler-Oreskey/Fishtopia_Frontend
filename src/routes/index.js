import React, { Fragment, Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';

//route pages
import Login from './Login';
import Home from './Home';
import MapContainer from './MapContainer';
import PrivacyPolicy from './PrivacyPolicy';

class Routes extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
              <Fragment>
                <Header />
                <Route exact path="/home" component={Home} />
                <Route exact path="/gmaps" component={MapContainer} />
                <Route exact path="/privacypolicy" component={PrivacyPolicy} />
                <Footer />
              </Fragment>
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default Routes

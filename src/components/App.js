import React, { Fragment, Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';

//route pages
import Login from '../routes/Login';
import Home from '../routes/Home';
import GoogleMaps from '../routes/GoogleMaps';
import PrivacyPolicy from '../routes/PrivacyPolicy'
import SubmitForm from './SubmitForm/SubmitForm';

class App extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
              <Fragment>
              <Header />
              <Route exact path="/home" component={Home} />
              <Route exact path="/gmaps" component={GoogleMaps} />
              <Route exact path="/submitform" component={SubmitForm} />
              <Route exact path="/privacypolicy" component={PrivacyPolicy} />
              <Footer />
              </Fragment>
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App

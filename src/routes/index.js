import React, { Fragment, Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';

//route pages
import Login from './Login';
import Home from './Home';
import MapContainer from './MapContainer';
import PrivacyPolicy from './PrivacyPolicy';

// //jwt decode import
// import decode from 'jwt-decode'
//
// //get jwt token and refresh token from local storage
// const checkAuth = () => {
//   const token = localStorage.getItem('token')
//   const refreshToken = localStorage.getItem('refreshToken')
//
//   if (!token || !refreshToken) {
//     return false;
//   }
//   //decode the jwt token and check for expiration
//   try {
//     const { exp } = decode(refreshToken)
//     if (exp < Date.now() / 1000) {
//       return false;
//     }
//     }catch (e) {
//       return false;
//     }
//     return true;
//   }
//
// const AuthRoute = ({component: Component, ...rest}) => (
//   <Route {...rest} render={props => (
//     checkAuth() ? (
//       <Component {...props} />
//     ) : (
//       <Redirect to={{ pathname: '/login' }} />
//     )
//   )} />
// )

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

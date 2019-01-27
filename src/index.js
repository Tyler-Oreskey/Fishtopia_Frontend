import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//route pages
import Login from './routes/Login';
import Home from './routes/Home';
import Gmaps from './routes/Gmaps';
import PrivacyPolicy from './routes/PrivacyPolicy'
import Header from './components/Common/Header/Header';
import SubmitForm from './components/SubmitForm/SubmitForm';

//css files
import './index.css';
import * as serviceWorker from './serviceWorker';

//create function to handle routing and browser history
const PagesRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/gmaps" component={Gmaps} />
            <Route exact path="/submitform" component={SubmitForm} />
            <Route exact path="/privacypolicy" component={PrivacyPolicy} />
          </Switch>
      </div>
    </BrowserRouter>
  );
};

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PagesRouter />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

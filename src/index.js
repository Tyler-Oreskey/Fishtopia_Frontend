import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Gmaps from './routes/Gmaps';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import SubmitForm from './components/SubmitForm/SubmitForm';
import './index.css';
import * as serviceWorker from './serviceWorker';

//create function to handle routing and browser history
const PagesRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/gmaps" component={Gmaps} />
            <Route exact path="/submitform" component={SubmitForm} />
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

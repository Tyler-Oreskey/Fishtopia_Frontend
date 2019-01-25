import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About'
import Gmaps from './routes/Gmaps'
import Header from './components/Header/Header'
import './index.css';
import * as serviceWorker from './serviceWorker';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/gmaps" component={Gmaps} />
          </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

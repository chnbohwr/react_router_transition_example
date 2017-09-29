import React from 'react';
// import package
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import 'ress/dist/ress.min.css';
import stores from '../services/index';

// import relative path
import Home from './Home';
import NotFound from './NotFound';

const Main = () => (
  <Provider {...stores}>
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default Main;

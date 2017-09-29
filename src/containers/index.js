import React from 'react';
// import package
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'ress/dist/ress.min.css';

// import relative path
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

const Main = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Main;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import About from '../About/';
import './Home.less';


export default class Home extends Component {
  static propTypes = {
    match: PropTypes.object,
  }
  render() {
    console.log('====================================');
    console.log(this.props.match);
    console.log('====================================');
    return (
      <div id="pageHome">
        <div>hello react maker</div>
        <ul>
          <li>
            <Link to="/">home page</Link>
          </li>
          <li>
            <Link to="/about">go to about page</Link>
          </li>
        </ul>
        <Route path="/about" component={About} />
      </div>
    );
  }
}

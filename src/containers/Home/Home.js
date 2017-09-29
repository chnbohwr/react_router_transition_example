import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import classnames from 'classnames';
import { Route, Link } from 'react-router-dom';
import About from '../About/';
import './Home.less';


@inject('pageService') @observer
export default class Home extends Component {
  static propTypes = {
    history: PropTypes.object,
    pageService: PropTypes.object,
  }
  goHome = () => {
    this.props.pageService.pageIn = false;
    setTimeout(() => {
      this.props.history.push('/');
    }, 500);
  }
  goAbout = () => {
    this.props.history.push('/about');
    setTimeout(() => {
      this.props.pageService.pageIn = true;
    }, 100);
  }
  render() {
    const { pageIn } = this.props.pageService;
    const headerClass = classnames('header', { pageIn });
    return (
      <div id="pageHome">
        <div className={headerClass}>
          <button onClick={this.goHome}>go home</button>
        </div>
        <div className="bigPage">
          <div>this is big page jioji</div>
          <button onClick={this.goAbout}>go to about page</button>
        </div>
        <div className="bigPage">
          <div>this is big page 324r23r</div>
          <button onClick={this.goAbout}>go to about page</button>
        </div>
        <div className="bigPage">
          <div>this is big page mmew3</div>
          <button onClick={this.goAbout}>go to about page</button>
        </div>
        <Route path="/about" component={About} />
      </div>
    );
  }
}

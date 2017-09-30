import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AnimatedRoute } from 'react-router-transition';
import About from '../About/';
import './Home.less';

export default class Home extends Component {
  static propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
  }
  goHome = () => {
    this.props.history.push('/');
  }
  goAbout = () => {
    this.props.history.push('/about');
  }
  render() {
    const { isExact } = this.props.match;
    const headerClass = classnames('header', { pageIn: !isExact });
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
        <AnimatedRoute
          className="aboutRouter"
          atEnter={{ offset: 100 }}
          atLeave={{ offset: 100 }}
          atActive={{ offset: 0 }}
          mapStyles={styles => ({
            transform: `translateX(${styles.offset}%)`,
          })}
          path="/about"
          component={About} />
      </div>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './About.less';

export default class About extends Component {
  static propTypes = {
    history: PropTypes.object
  }
  state = {
    pageIn: false
  }
  componentDidMount() {

    this.setState({ pageIn: true });
  }
  goHome = () => {
    this.setState({ pageIn: false });
    setTimeout(() => {
      this.props.history.push('/');
    }, 250);
  }
  render() {
    const { pageIn } = this.state;
    const aboutClass = classnames({ pageIn });
    return (
      <div id="aboutPage" className={aboutClass}>
        <button onClick={this.goHome}>GoHome</button>
        this is about page
      </div>
    );
  }
}

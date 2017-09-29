import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './About.less';

@inject('pageService') @observer
export default class About extends Component {
  static propTypes = {
    pageService: PropTypes.object,
  }
  render() {
    console.log('render about ------', this.props.pageService.pageIn);
    const { pageIn } = this.props.pageService;
    const aboutClass = classnames({ pageIn });
    return (
      <div id="aboutPage" className={aboutClass}>
        <div className="bigPage">About1
        </div>
        <div className="bigPage"> About2</div>
        <div className="bigPage">About-0000</div>
      </div>
    );
  }
}

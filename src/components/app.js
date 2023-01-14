import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio/portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Nathanael King's Portfolio</h1>
        <h2><div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div></h2>
        <PortfolioContainer />
      </div>
    );
  }
}

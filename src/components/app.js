import React, { Component } from 'react';
import moment from "moment";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';

import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NoMatch from "./pages/no-match";
export default class App extends Component {
  constructor() {
    super();
    
    this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }
  getPortfolioItems() {
    axios
    .get('https://natking.devcamp.space/portfolio/portfolio_items')
    .then(response =>  {
    // handle success
      console.log("response data", response);
    })
    .catch(error => {
      console.log(error);
      
    });
  }
  render() {
    this.getPortfolioItems();
    return (
      <div className='app'>

      <Router>
        <div>
        <h1>Nathanael King's Portfolio</h1>
        <h2><div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div></h2>
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component ={Home} />
          <Route exact path="/about-me" component ={About} />
          <Route exact path="/contact" component ={Contact} />
          <Route exact path="/blog" component ={Blog} />
          <Route exact path="/portfolio/:slug" component ={PortfolioDetail} />
          <Route component={NoMatch} />
        </Switch>
        </div>  
      </Router>

      </div>
    );
  }
}

import React, { Component } from "react";

import PortfolioItem from "./portfolio-items";


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Wlecome to my Portfolio",
            data: [
                {title: 'Army'}, 
                {title: 'Lackheed Martin'}, 
                {title: 'SpaceX'},
                {title: 'Sierra Space'}]
        };
        console.log("Portfolio container has rendered");
    }

    portfolioItems() {
        return this.state.data.map(item => {
          return <PortfolioItem title={item.title} url={"google.com"} />;
        });
      }
    render() {
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}
            </div>
            )
    }
}
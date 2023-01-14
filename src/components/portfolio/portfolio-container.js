import React, { Component } from "react";

import PortfolioItem from "./portfolio-items";


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Wlecome to my Portfolio",
            isLoading: false,
            data: [
                {title: 'Army', 
                category: "Goverment", 
                slug: "army"}, 
                
                {title: 'Lockheed Martin', 
                category: "Private Sector", 
                slug: "lockheed-martin"},

                {title: 'SpaceX', 
                category: "Contractor", 
                slug: "spacex"},

                {title: 'Sierra Space', 
                category: "Contractor", 
                slug: "sierra-space"}]
        };
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
          return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug}/>;
        });
      }



    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('Contractor')}>Contractor</button>
                <button onClick={() => this.handleFilter('Private Sector')}>Private Sector</button>
                <button onClick={() => this.handleFilter('Goverment')}>Goverment</button>


                {this.portfolioItems()}


            </div>
            )
    }
}
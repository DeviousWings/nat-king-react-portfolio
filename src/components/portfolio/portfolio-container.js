import React, { Component } from "react";
import axios from 'axios';


import PortfolioItem from "./portfolio-items";


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Wlecome to my Portfolio",
            isLoading: false,
            data: []
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

    getPortfolioItems() {
        axios
        .get('https://natking.devcamp.space/portfolio/portfolio_items')
        .then(response =>  {
        // handle success
          console.log("response data", response);
          this.setState({
            data: response.data.portfolio_items
          })
        })
        .catch(error => {
          console.log(error);
          
        });
    }

    portfolioItems() {
        return this.state.data.map(item => {
            
          return (
          <PortfolioItem title={item.name} url={item.url} slug={item.id}/>
          );
        });
      }
      
      componentDidMount() {
          this.getPortfolioItems();

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
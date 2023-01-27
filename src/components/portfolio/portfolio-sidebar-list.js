import React, { Component } from 'react';

const PortfolioSidebarList = (props) => {

    const portfolioList = props.data.map(portfolioItem => {
        return (
        <div>
            <div>
                <img src={portfolioItem.thumb_image_url}></img>
            </div>
            <h1>{portfolioItem.name}</h1>
            <h1>{portfolioItem.id}</h1>
         </div>
        )
    })

    return <div>{portfolioList}</div>;
}

export default PortfolioSidebarList;
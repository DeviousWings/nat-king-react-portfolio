// import React, { Component } from "react";
import React from 'react';
import { NavLink } from 'react-router-dom';
// all in the comments is a longer hand to write code in.
// Turning a class componenet into an functional component helps shorten the code.
// export default class NavigationComponent extends Component {
const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
            <NavLink to ="/blog" activeClassName="nav-link-active"> Blog </NavLink>
            </div>
            )
    }

    // constructor() {
    //     super();
    // }


    // render() {
    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to ="/" activeClassName="nav-link-active"> Home </NavLink>
                </div>
                <div className="nav-link-wrapper">
                <NavLink to ="/about-me" activeClassName="nav-link-active"> About </NavLink>
                </div>
                <div className="nav-link-wrapper">
                <NavLink to ="/contact" activeClassName="nav-link-active"> Contact </NavLink>              
                </div>
                {props.loggedInStatus === "LOGGED_IN" ?  
                dynamicLink("/blog", "Blog") : null}
            </div>

            <div className="right-side">Nathanael King</div>
        </div>);
};
    export default NavigationComponent
// }
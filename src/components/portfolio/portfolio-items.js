import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    //Data that we will need:
    // - background image: thumb_image_url
    // - logo
    // - description: description
    // - id: id
    const { id, description, thumb_image_url, logo } = props.item;
    return (
        <div>
        {/* This will do the same but looks cleaner and is more relient on the website devcamp.space/ */}
        <img src={thumb_image_url}/>
        <img src={logo}/>
            <div>
                {description}
            </div>
            <Link to={`/portfolio/${id}`}>Project</Link>
        {/* Step one was to see if you could get access to the API */}
        {/* <Link to={`/portfolio/${props.slug}`}>Project</Link> */}
        </div>
        )
}
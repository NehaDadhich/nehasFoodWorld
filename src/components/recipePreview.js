import React from "react";
import { Link} from "gatsby";
import Img from "gatsby-image";

export default function RecipePreview ({title, path, tags, description, displayImage, date }) {
  return  <div className="margin-10-b margin-5-r">
  <Link to={path} className="link" id="path">
    <div className="grow image-card is-light-grey-bg">
    <Img
          fluid={displayImage.childImageSharp.fluid}
          className="cover-image"
          
        />
      <div className="image-card-container is-black">
        <h2> <strong>{title} </strong></h2> 
        <p> {styleTags(tags)} </p>
        <p className="margin-1-b">{description}</p>
        <p className="small-text">{date}</p>
      </div>
    </div>
  </Link>
  </div>
}

export const styleTags = (tags) => 
tags.map((tag) => (
  <div className="tags"> {tag} </div>
))


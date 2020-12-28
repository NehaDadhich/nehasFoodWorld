import React from "react";
import { Link} from "gatsby";
import Img from "gatsby-image";
import { kebabCase } from "lodash";

export default function RecipePreview ({title, path, tags, description, displayImage, date }) {
    return  <div className="margin-6-b margin-5-r">
  <Link to={path} className="link" id="path">
    <div className="grow image-card is-light-grey-bg">
    <Img
          fluid={displayImage.childImageSharp.fluid}
          className="cover-image"
          
        />
      <div className="image-card-container is-black">
        <h2> <strong>{title} </strong></h2> 
        <div className="tags-container"> {styleTags(tags)} </div>
        <p className="margin-1-b margin-0-t">{description}</p>
        <p className="small-text">{date}</p>
      </div>
    </div>
  </Link>
  </div>
}

export const styleTags = (tags) => 
tags.map((tag) => (
  <Link to={`/tags/${kebabCase(tag)}`} className="tag-link margin-3-b"> <p className="tags margin-1-tb margin-1-r">{tag} </p></Link>
))


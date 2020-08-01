import React from "react";
import { Link} from "gatsby";

export default function RecipePreview ({title, path, date }) {
  return  <div className="margin-3-b margin-5-r">
<Link to={path} className="link" id="path">
  <div className="grow tech-card is-light-grey-bg is-black">
      <h2> <strong>{title} </strong></h2> 
      <p className="small-text">{date}</p>
  </div>
</Link>
</div>
}
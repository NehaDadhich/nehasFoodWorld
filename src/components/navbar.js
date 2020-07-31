import React from "react"
import {Link} from "gatsby";

export default function navbar(){
    return <div class="col-xs-12 col-sm-12 col-md-12">
    <nav class="navbar is-black">
    <ul class="main-nav pad-0">
    <li>
      <div class="nav-links">
      <Link className="nav-link is-black" to="/recipes/" activeStyle={ navLinkActive}> Recipes </Link>
          </div>
      </li>
      <li>
      <div class="nav-links">
      <Link className="nav-link is-black" to="/makingOf/" activeStyle={ navLinkActive}>  Making of </Link>
          </div>
      </li>
      <li>
        <div class="nav-links">
        <Link className="nav-link is-black" to="/search/" activeStyle={ navLinkActive}> Search </Link>
          </div>
      </li>
      <li>
        <div class="nav-links">
        <Link className="nav-link is-black" to="/about/" activeStyle={ navLinkActive}> About </Link>
          </div>
      </li>
    </ul>
  </nav>
  </div>
}

const navLinkActive = {
    borderBottom: "2px solid #BA83C4"
}
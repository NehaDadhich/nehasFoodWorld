import React from "react";
import Logo from "../images/nehasFoodWorld.png";
import {Link} from "gatsby";
import useDarkMode from "use-dark-mode";
import {faBars} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  const darkMode = useDarkMode(false);
  const toggleDarkMode = function(){
    if(darkMode.value) {
        darkMode.disable();
        document.getElementById("darkModeButton").innerHTML = "🌙";
    }
    else {
      darkMode.enable();
      document.getElementById("darkModeButton").innerHTML = "☀️";
    }
  }
    return (
      <>
      <div className="row is-black pad-3-t">
        <div className="col-md-8 col-xs-12">
      <Link to="/">
          <img alt="Neha's Food World Logo" src={Logo} class="logo"/>
        </Link>
        </div>
        <div class="col-md-4 col-xs-12">
        <nav class="navbar is-black">
    <label class="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
    <FontAwesomeIcon className="is-black" icon={faBars} />
        </label>
    <input type="checkbox" id="chkToggle"></input>
    <ul class="main-nav" id="js-menu">
      <li>
        <div class="nav-links">
        <Link className="nav-link nav-link-style" to="/about/" activeStyle={ navLinkActive}> About </Link>
          </div>
      </li>
      <li>
      <div class="nav-links">
      <Link className="nav-link nav-link-style" to="/tech/" activeStyle={ navLinkActive}> Making of </Link>
          </div>
      </li>
      <li>
      <div class="nav-links navButton">
      <button id="darkModeButton" className="darkModeBtn" onClick={toggleDarkMode}> ☀️ </button>
          </div>
      </li>
    </ul>
  </nav>
  </div>
  </div>
  </>
    );
}

const navLinkActive = {
    borderBottom: "1px solid #f08f00"
}

function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items__Hidden')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

var element = .querySelector('.Navbar__Link-toggle');
//element.addEventListener('click', classToggle);
if(element){
  element.addEventListener('click', classToggle);
}
  
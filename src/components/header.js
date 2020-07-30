import React, {useState, useEffect} from "react";
import {Link} from "gatsby";
import Navbar from "../components/navbar";
import Logo from "../images/nehasFoodWorld.png";
import useDarkMode from "use-dark-mode";
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import {faSun} from "@fortawesome/free-regular-svg-icons"
import {faMoon} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  const darkMode = useDarkMode(false);
  const toggleDarkMode = function(){
    if(darkMode.value) {
      darkMode.disable();
    }
    else {
      darkMode.enable();
    }
  }
  const [navbarOpen, setNavbarOpen] = useState(false)
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (navbarOpen) {
        setNavbarOpen(false)
      }
    })
  })
    return (
      <>
      <div className="row flexbox is-black pad-2-t pad-2-b">
        <div className="col-xs-8 col-sm-8 col-md-9 pad-5-l">
      <Link to="/">
          <img alt="Neha's Food World Logo" src={Logo} class="logo"/>
        </Link>
        </div>
        
        <div class="col-xs-2 col-sm-2 col-md-2"> 
        <button id="darkModeButton" className="darkModeBtn" onClick={toggleDarkMode} style={{float: "right"}}> {darkMode.value ?
            <FontAwesomeIcon className="navbar-icon is-black" icon={faSun}/>
              : <FontAwesomeIcon className="navbar-icon is-black" icon={faMoon}/> } 
         </button> 
         </div>
         <div className="col-xs-2 col-sm-2 col-md-1">
         <button className="toggleIcon" onClick={() => setNavbarOpen(!navbarOpen)}> 
          {navbarOpen ? 
          <FontAwesomeIcon className="navbar-icon is-black" icon={faTimes}/>  : 
          <FontAwesomeIcon className="navbar-icon is-black" icon={faBars}/> }
        
        </button>
           </div>
      
         <div> {navbarOpen &&  <Navbar />} </div>
  </div>
  </>
    );
}


  
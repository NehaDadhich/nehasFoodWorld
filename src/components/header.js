import React from "react";
import Logo from "../images/nehasFoodWorld.png";
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from "gatsby";
import useDarkMode from "use-dark-mode";

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
  <Navbar class="navbar">
    <Navbar.Brand>
        <Link to="/" className="link-reverse">
        <img src={Logo} class="logo"/>
        </Link>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Link className="nav-link" to="/about/" activeStyle={ navLinkActive}> About </Link>
    </Nav>
    <Nav className="justify-content-end always-white-text">
      {greetMe()}
    </Nav>
    <Nav className="justify-content-end">
      <button id="darkModeButton" className="darkModeBtn" onClick={toggleDarkMode}> ☀️ </button>
      </Nav>
  </Navbar>
    );
}

const greetMe = function() {
    var dateTime = new Date();
    var hour = dateTime.getHours();

    if(hour < 12){
        return "Good Morning ";
    }
    else if(hour < 18){
        return "Good afternoon ";
    }
    else {
        return "Good evening ";
    }
}

const navLinkActive = {
    borderBottom: "1px solid #f08f00"
}
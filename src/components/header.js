import React from "react";
import Logo from "../images/nehasFoodWorld.png";
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
      <>
      <header className="header-style pad-2-t pad-2-b pad-5-r">
        <div className="pad-0-l">
            <ul className="nav-bar-ul">
              <li>
      <Link to="/">
          <img alt="Neha's Food World Logo" src={Logo} class="logo"/>
        </Link> </li>
          <li><Link className="nav-link nav-link-style" to="/about/" activeStyle={ navLinkActive}> About </Link> </li>
           <li><Link className="nav-link nav-link-style" to="/tech/" activeStyle={ navLinkActive}> Tech </Link> </li>
          <li> {greetMe()} </li>
          <li> <button id="darkModeButton" className="darkModeBtn" onClick={toggleDarkMode}> ☀️ </button> </li>
          </ul>  
        </div>
      </header>
      {/* <div className="row flexbox pad-5 container-small container-fluid justify-content-space-between">
        <div className="col-xs-2 flexbox">
        <Link to="/" className="link-reverse">
          <img src={Logo} class="logo"/>
        </Link>
        </div>
        <div className="col-xs-5 flexbox">
        <Link className="nav-link" to="/about/" activeStyle={ navLinkActive}> About </Link>
        </div>
        <div
          className="col-xs-5 flexbox"
        >
         {greetMe()} 
         <button id="darkModeButton" className="darkModeBtn" onClick={toggleDarkMode}> ☀️ </button>
         </div>
      </div> */}
  {/* <Navbar className="navbar" >
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
    <OverlayTrigger placement="bottom" overlay={tooltip}>
      <button id="darkModeButton" className="darkModeBtn" onClick={toggleDarkMode}> ☀️ </button>
      </OverlayTrigger>
      </Nav>
  </Navbar> */}
  </>
    );
}

// const tooltip = (
//   <Tooltip id="tooltip">
//     Change theme
//   </Tooltip>
// );

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
import React from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import CookieConsent from "react-cookie-consent"
import Footer from "../components/footer";
import { Link } from "gatsby";
import ScrollToTop from "../components/scrollToTop";
import { useLocation } from "@reach/router"
import  { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Layout = ( { children } ) => {
 const location = useLocation()
  return (
      <>
      <div className="is-light-grey-bg is-black">
      <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="gatsby-gdpr-google-analytics"
          enableDeclineButton
          declineButtonText="Decline"
          style={{ background: "inherit",
           padding: 5,
            zIndex: 2000, 
            color: "inherit"
          }}
          buttonStyle={{
            color: "black",
            fontSize: "13px",
            background: "#00b9b9",
            fontFamily: "lato",
            borderRadius: 3,
            padding: 10,
            marginRight: 60,
          }}
          declineButtonStyle= {{
            color: "black",
            fontSize: "13px",
            background: "#ff4d4d",
            fontFamily: "lato",
            borderRadius: 3,
            padding: 10,
            marginRight: 10,
          }}
          onAccept={() => {
            initializeAndTrack(location)
          }}
          onDecline={() => {
            window[`ga-disable-`] = true
          }}
        >
          <p className="margin-0">
          To improve your experience, this website uses cookies and Google Analytics. By using this website, you accept the privacy policy.
          <br /> For more information please read the complete
            <Link to="/disclaimer" className="cookie-consent-link"> Privacy and Cookie policy </Link> carefully. 
          </p>
        </CookieConsent>
        <ScrollToTop showBelow={30}/>
        <Header />
        <Link to="/search">
          <button className="searchButton">
            <FontAwesomeIcon  className="searchIcon" icon={faSearch} /> 
          </button>
        </Link>
        </div>
        <main className="fixed-height pad-5-t is-white-bg">{children}</main>
        <div className="is-light-grey-bg is-black">
        <Footer />
        </div>
      </>
    );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;


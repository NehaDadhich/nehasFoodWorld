import React from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import CookieConsent, {Cookies} from "react-cookie-consent"
import Footer from "../components/footer";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <>
    <div className="is-light-grey-bg is-black">
    <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: "#BA83C4", padding: 5 }}
        buttonStyle={{
          color: "black",
          fontSize: "13px",
          background: "#2e96d3",
          fontFamily: "lato",
          borderRadius: 3,
          padding: 10,
          marginRight: 60,
        }}
        onAccept={() => {
          Cookies.set('_ga')
          Cookies.set('_gat')
          Cookies.set('_gid')
        }}
      >
        <p className="margin-0">
          To improve your experience, this website uses cookies. By using this website, you accept the privacy policy.
          <br /> Please read the complete
          <Link to="/disclaimer" className="cookie-consent-link"> Privacy and Cookie policy </Link> carefully. 
        </p>
      </CookieConsent>
    
      <Header />
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

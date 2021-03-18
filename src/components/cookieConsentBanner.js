import React from "react"
import CookieConsent from "react-cookie-consent"
import { useLocation } from "@reach/router"
import  { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import Link from "gatsby"

export default function CookieConsentBanner() {
    const location = useLocation()
    console.log(location)
    return (
        <>
    <CookieConsent 
        location="bottom"
        buttonText="OK"
        cookieName="gatsby-gdpr-google-analytics"
        enableDeclineButton
        declineButtonText="Decline"
        style={{ background: "#BA83C4", padding: 5, zIndex: 2000 }}
        buttonStyle={{
          color: "black",
          fontSize: "13px",
          background: "#00b9b9",
          fontFamily: "lato",
          borderRadius: 3,
          padding: 10,
          marginRight: 60,
        }}
        onAccept={() => {
          initializeAndTrack(location)
        }}
        onDecline={() => {
          window[`ga-disable-UA-168017870-1`] = true
        }}
      >
        <p className="margin-0">
          This website uses Google Analytics to analyze trends. For more information please read the complete
          <Link to="/disclaimer" className="link"> Privacy and Cookie policy </Link> carefully. 
        </p>
      </CookieConsent>
      </>);
}
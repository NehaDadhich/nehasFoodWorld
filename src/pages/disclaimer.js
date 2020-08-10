import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function lost() {
  return (
    <Layout>
      <SEO title="Disclaimer" />
      <div className="is-grey">
        <div className="row pad-5-t pad-5-l pad-5-r pad-20-b">
          <div className="col-xs-12 col-md-12 pad-10-l is-black">
            <h1 className="is-hero-menu margin-0">DISCLAIMER</h1>
            <p>All views expressed on this site are my own and do not represent the opinions of anyone I am, have been, or will be assoicated with</p>
            <h2>PRIVACY POLICY </h2>
            <p> Privacy of the visitors is one of the top priorities of this website. Please read this page carefully to understand the privacy policy.</p>
            <h3>COOKIE POLICY</h3>
            <p>This website uses cookies for enhancing user experience. Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.
                These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
            <h3>GOOGLE ANALYTICS</h3>
            <p>
                This website uses Google Firebase Analytics for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. 
                Google Analytics is a web analysis service provided by Google LLC (“Google”). The information collected by Google Analytics include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
                Please note while the ip address is collected by Google it is not shared in the analytics report for privacy reasons. Therefore, no personally identifiable information is available with this website. For further information please visit <a href="https://policies.google.com/technologies/partner-sites" target="_blank" className="link" rel="noopener noreferrer"> How Google uses data when you use an app using their services</a></p>
            <h3> THIRD PARTIES </h3>
            <p> This website includes hyperlinks to, and details of, third party websites. This website have no control over, and is not responsible for, the privacy policies and practices of third parties.</p>
            <h3> CONSENT </h3>
            <p> By using this website, you hereby consent to its privacy policy and agree to its terms. </p>
            <p>This website reserves the right to update or change the above Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
            <p>For any queries with the above privacy policy, please contact the admin at <a href="mailto:nehadadhich97@gmail.com" className="link">nehadadhich97@gmail.com</a></p>
            <Link to="/">
              <button className="custom-button margin-3-t">Ok, got it!</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

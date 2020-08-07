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
            <h3> LOG FILES </h3>
            <p>This website follows a standard procedure of using log files. These files log visitors when they visit websites. 
                All hosting companies do this as a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. 
                The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
            <h3> THIRD PARTIES </h3>
            <p> This website includes hyperlinks to, and details of, third party websites. This website have no control over, and is not responsible for, the privacy policies and practices of third parties.</p>
            <h3> CONSENT </h3>
            <p> By using this website, you hereby consent to its privacy policy and agree to its terms. </p>
            <p>This website reserves the right to update or change the above Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
            <Link to="/">
              <button className="custom-button margin-3-t">Ok, got it!</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

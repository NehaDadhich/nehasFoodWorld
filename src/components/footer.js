import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { graphql, Link, StaticQuery } from "gatsby";
 

const Footer = () => {
    return(
        <footer>
            <StaticQuery 
            query={
                graphql`{
                    pageViews{
                        totalCount
                      }
                    }`
            }
            render={(data) => {
                const totalCount = data.pageViews.totalCount;
                return (
                <>
                <div class="footer is-black">
                    <p className="margin-0-b margin-1-t">Made with ❤️ by Neha Dadhich </p>
                <p className="margin-0-b margin-1-t"> This website has <span className="is-pink">{totalCount} </span> views. This website uses Google Analytics to analyse trends and views. Please read the 
                <Link to="/disclaimer" className="link"> disclaimer</Link> carefully.
                </p>
                <p className="margin-0-b margin-1-t">  For ideas, discussions and feedback find me at &nbsp;
                    <OutboundLink  href="https://www.linkedin.com/in/neha-dadhich-gu/" target="_blank" className="social-icon" rel="noopener noreferrer" aria-label="Neha's LinkedIn Link"> <FontAwesomeIcon icon={faLinkedinIn}/></OutboundLink> &nbsp;
                    <OutboundLink href="https://github.com/NehaDadhich" target="_blank" className="social-icon" rel="noopener noreferrer" aria-label="Neha's Github Link"><FontAwesomeIcon icon={faGithub} /></OutboundLink>
                     &nbsp; <OutboundLink href="mailto:nehadadhich97@gmail.com" className="social-icon" aria-label="Neha's Gmail Link"> 
                     <FontAwesomeIcon icon={faEnvelope} className="social-icon" /> </OutboundLink>
                </p>
                <p className="margin-0-b margin-1-t">
                Developed using <OutboundLink className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/slarsendisney/gatsby-mango">Samuel Larsen-Disney's Mango Gatsby boilerplate </OutboundLink>. </p>
                </div>
                </> );

            }}
            />
            </footer>
    );
 }

export default Footer;
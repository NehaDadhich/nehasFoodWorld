import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
 
export default function Footer() {
    return (
        <>
        <div class="footer is-black">
            <p className="margin-0-b margin-1-t">Made with ❤️ by Neha Dadhich </p>
          <p className="margin-0-b margin-1-t">  For ideas, discussions and feedback find me at &nbsp;
            <a  href="https://www.linkedin.com/in/neha-dadhich-gu/" target="_blank" className="social-icon" rel="noopener noreferrer" aria-label="Neha's LinkedIn Link"> <FontAwesomeIcon icon={faLinkedinIn}/></a> &nbsp;
            <a href="https://github.com/NehaDadhich" target="_blank" className="social-icon" rel="noopener noreferrer" aria-label="Neha's Github Link"><FontAwesomeIcon icon={faGithub} /></a>
             &nbsp; <a href="mailto:nehadadhich97@gmail.com" className="social-icon" aria-label="Neha's Gmail Link"> 
             <FontAwesomeIcon icon={faEnvelope} className="social-icon" /> </a>
        </p>
        <p className="margin-0-b margin-1-t">
        All views expressed on this site are my own and do not represent the opinions of anyone I have been, am now or will be assoicated with.
        </p>
        </div>
        </>
    );
}
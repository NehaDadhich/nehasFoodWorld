import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faMailchimp } from '@fortawesome/free-brands-svg-icons' 

export default function Footer() {
    return (
        <>
        <div class="footer is-black">
            Made with ❤️ by Neha Dadhich
            <br />
            For ideas, discussions and feedback find me at &nbsp;
            <a  href="https://www.linkedin.com/in/neha-dadhich-gu/" target="_blank" className="icon"> <FontAwesomeIcon icon={faLinkedinIn} /></a> &nbsp;
            <a href="https://github.com/NehaDadhich" target="_blank" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
             &nbsp; <a href="mailto:nehadadhich97@gmail.com" className="mail-link"> ✉️ </a>
        </div>
        </>
    );
}
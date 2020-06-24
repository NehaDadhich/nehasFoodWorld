import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
 
export default function Footer() {
    return (
        <>
        <div class="footer is-black">
            Made with ❤️ by Neha Dadhich
            <br />
            For ideas, discussions and feedback find me at &nbsp;
            <a  href="https://www.linkedin.com/in/neha-dadhich-gu/" target="_blank" className="icon" rel="noopener noreferrer" aria-label="Neha's LinkedIn Link"> <FontAwesomeIcon icon={faLinkedinIn} className="is-black"/></a> &nbsp;
            <a href="https://github.com/NehaDadhich" target="_blank" className="icon" rel="noopener noreferrer" aria-label="Neha's Github Link"><FontAwesomeIcon icon={faGithub} className="is-black" /></a>
             &nbsp; <a href="mailto:nehadadhich97@gmail.com" className="is-black" aria-label="Neha's Gmail Link"> 
             <FontAwesomeIcon icon={faEnvelope} className="is-black" /> </a>
        </div>
        </>
    );
}
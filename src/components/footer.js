import React from "react";
import linkedInLogo from "../images/linkedInLogo.png";
import githubLogo from "../images/githubLogo.png";
export default function Footer(){
    return (
        <>
        <div class="footer">
            Made with ❤️ by Neha Dadhich
            <br />
            For ideas, discussions and feedback find me at &nbsp;
            <a href="https://www.linkedin.com/in/neha-dadhich-gu/" target="_blank"><img src={linkedInLogo} height="15px"/></a> &nbsp;
            <a href="https://github.com/NehaDadhich" target="_blank"><img src={githubLogo} height="18px"/></a>
             &nbsp; <a href="mailto:nehadadhich97@gmail.com" className="mail-link"> ✉️ </a>
        </div>
        </>
    );
}
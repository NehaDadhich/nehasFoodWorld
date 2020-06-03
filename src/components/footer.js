import React from "react";
import linkedInLogo from "../images/linkedInLogo.png";
export default function Footer(){
    return (
        <>
        <div class="footer">
            Made with ❤️ by Neha Dadhich
            <br />
            For ideas, discussion and feedback find me at &nbsp;
            <a href="https://www.linkedin.com/in/neha-dadhich-gu/" target="_blank"><img src={linkedInLogo} height="15px"/></a>
             &nbsp; or <a href="mailto:nehadadhich97@gmail.com"> ✉️ </a>
        </div>
        </>
    );
}
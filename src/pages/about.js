import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {Link} from "gatsby";

export default function About() {
    return (
        <>
        <Layout>
        <SEO title="About" />
            <div className="container-small pad-10-b pad-10-l pad-10-r">
            <div className="row">
                <h1 class="is-pink is-hero-menu"> Welcome to Neha's Food World</h1>
                </div>
                <div className="row pad-10-b is-light-grey-bg is-black">
                    <div className="pad-5">
                <h4> Hi 👋</h4>
                    <p>I am a Graduate Software Engineer at 
                        <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.americanexpress.com/"> American Express </a>.
                    I am passionate about programming and software development.
                    I have mainly worked with backend technologies. Recently, I started learning front end development and completed 
                    <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/certification/nehadadhich/javascript-algorithms-and-data-structures"> FreeCodeCamp's JavaScript Data Structure and Algorithm Certificate </a>.
                    </p>
                    <p> Currently, I am learning website development using React and Gatsby. Apart from coding, I enjoy cooking therefore, I thought it would be a good idea to combine them and build something. </p>
                    <p>
                    Through this website, I am trying to share my version of few recipes as well as improve my coding skills. You can also see how this website is being developed under the 
                  <Link class="link" to="/makingOf" > Making of </Link> section.
                </p>
                <p> This website was developed using <a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/slarsendisney/gatsby-mango">Samuel Larsen-Disney's mango gatsby boilerplate </a>. Thank you Sam for being an excellent teacher.</p>
                <p> I hope you find this website helpful and enjoy some tasty food. </p>

                <h4> Happy Cooking 😃</h4>
                </div>
            </div>
            </div>
        </Layout>
        </>
    );
}
import React from "react";
import {Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReadingProgress from "../components/readingProgress";
import {faHome} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        type,
        displayImage
      },
      html,
    },
    pageViews
  }
}) => {
  const target = React.createRef();

  return ( 
<Layout>
        <SEO title={title} />
        <ReadingProgress target={target} />
        <div className={`post`} ref={target}>
        <div>
            <div className="col-xs-12">
              <div className="row wrapper pad-10-l pad-5-b pad-5-t" style={{fontSize: '1.5em'}}>
            <Link to="/"> <FontAwesomeIcon className="icon-link" icon={faHome}/> </Link>
            <span className="is-black"> &nbsp;  {"<<"} 
            <Link className="link" to={type == "recipe" ? "/recipes/" : "/making-of/"}> {type == "recipe" ? "All recipes ": "Making of"} </Link>
             </span>
            </div>
              <div className="row wrapper pad-10-l pad-10-b">
                <div className="article-content is-light-grey-bg is-black pad-10-l pad-10-r">
                <h1 className="margin-3-b is-pink">{title}</h1>
                <h5 className="margin-3-b is-black"> By <span> <Link className="link" to="/about"> Neha Dadhich</Link></span></h5>
                <h5 className="margin-3-b is-black"> 👀 Total views: {pageViews === null ? 0 : pageViews.totalCount} <sup> * </sup> </h5>
                 {displayImage && <Img className="display-image"
                fluid={displayImage.childImageSharp.fluid}
              />} 
                
                <div
                  className={`${html ? "markdown" : ""}`}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
              </div>
            </div>
          </div>
          </div>
      </Layout>
    );
} 

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        type
        displayImage {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        } 
      }
      pageViews(path: {eq: $path}) {
        totalCount
      }
    }
`;

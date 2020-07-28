import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        displayImage
      },
      html,
    }
  }
}) => ( 
<Layout>
  <SEO title={title} />
  <div>
      <div className="col-xs-12 ">
        <div className="wrapper pad-10-l pad-10-b pad-10-r">
          <div className="article-content is-light-grey-bg is-black">
          <h1 className="margin-3-b is-pink">{title}</h1>
          {/* {displayImage && <Img className="display-image"
          fluid={displayImage.childImageSharp.fluid}
        />} */}
          
          <div
            className={`${html ? "markdown" : ""}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        </div>
      </div>
    </div>
</Layout>
);

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        displayImage {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        } 
      }
    }
`;

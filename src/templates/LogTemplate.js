import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default ({
  data: {
    markdownRemark: {
      frontmatter: {
        title
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
          <div className="pad-10-b pad-10-l pad-2-t pad-10-r is-light-grey-bg is-black">
          <h1 className="margin-3-b is-blue">{title}</h1>
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
        }
        
      }
    }
`;

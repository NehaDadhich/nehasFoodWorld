import React from "react";
import { StaticQuery, graphql } from "gatsby";
import RecipePreview from "../components/recipePreview";

export default function Recipes() {
  return (
    <StaticQuery
      query={graphql`
        query Recipes {
          allMarkdownRemark
  (
    filter: { frontmatter: {type: {eq: "recipe"}} }
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                  description
                  displayImage {
                    childImageSharp {
                      fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_noBase64
                      }
                    }
                  }
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
        }
      `}
      render={data => {
        let { edges } = data.allMarkdownRemark;

        
        return (
          <div className="pad-2-b pad-8-l margin-0-b">
              <h2 className="margin-0-t is-black" >Latest recipes</h2>

            <div className="row margin-0-l pad-5-t pad-5-r">
              {
                
              edges.map(item => (
                <div className="col-xs-12 col-md-4">
                <div>
                <RecipePreview {...item.node.frontmatter} className="is-black"/>
                </div>
                </div>
              ))
              }
            </div>
          </div>
        );
      }}
    />
  );
}


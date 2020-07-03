import React from "react";
import { StaticQuery, graphql } from "gatsby";
import TechPreview from "../components/techPreview";

export default function techArticles(limit) {
  return (
    <StaticQuery
      query={graphql`
        query techArticles {
          allMarkdownRemark
  (
      filter: { frontmatter: {type: {eq: "tech"}} }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
  ) {
            edges {
              node {
                id
                frontmatter {
                  path
                   title
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
          <div className="pad-2-b pad-8-l">
              <h2 className="margin-0-t is-black" >Making of</h2>

            <div className="row margin-0-l pad-5-t pad-5-r">
              {
                
              edges.map(item => (
                <div className="col-xs-12 col-md-6">
                <div>
                <TechPreview {...item.node.frontmatter} className="is-black"/>
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


import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

export const Label = ({ title, path }) => (
  <Link to={path} className="link margin-15-b" id="path">
    <div className="grow row">
      <div className="pad-2-t">
        <h2 className="link margin-3-b margin-0-t">{title}</h2>
      </div>
    </div>
  </Link>
);
export default function Projects() {
  return (
    <StaticQuery
      query={graphql`
        query Projects {
          allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                  displayImage {publicURL}
                }
              }
            }
          }
        }
      `}
      render={data => {
        let { edges } = data.allMarkdownRemark;
        
        return (
          <div className="row container-small pad-10-b pad-10-l">
            <div className="col-xs-12 ">
              <h1 className="margin-0-t is-blue" >Latest Recipes</h1>
              <div className="line margin-3-t margin-3-b" />
            </div>
            <div className="col-xs-12 col-md-10">
              {

              edges.map(item => (
                <Label {...item.node.frontmatter} className="is-black"/>
              ))
              }
            </div>
          </div>
        );
      }}
    />
  );
}

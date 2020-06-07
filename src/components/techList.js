import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export const Label = ({ title, path, displayImage, date}) => (
  
    <div className="margin-10-b margin-5-r">
  <Link to={path} className="link margin-15-b" id="path">
    <div className="grow image-card is-light-grey-bg">
    <Img
          fluid={displayImage.childImageSharp.fluid}
          className="cover-image"
          
        />
      <div className="image-card-container is-black">
        <h2> <strong>{title} </strong></h2> 
        <p className="small-text">{date}</p>
      </div>
    </div>
  </Link>
  </div>
);
export default function techArticles() {
  return (
    <StaticQuery
      query={graphql`
        query techArticles {
          allMarkdownRemark
  (
      filter: { frontmatter: {type: {eq: "tech"}} }
      sort: { fields: [frontmatter___date], order: DESC }
  ) {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
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
          <div className="row container-small pad-10-b pad-8-l">
            <div className="col-xs-12">
              <h2 className="margin-0-t is-black" >Latest tech articles</h2>
              <div className="line margin-3-t margin-3-b" />
            </div>

            <div className="row flexbox margin-0-l pad-5-t pad-5-r pad-5-b container">
              {
                
              edges.map(item => (
                <div className="col-xs-12 col-md-6">
                <div>
                <Label {...item.node.frontmatter} className="is-black"/>
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


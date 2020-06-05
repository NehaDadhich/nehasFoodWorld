import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import {Container, Col, Row} from "react-bootstrap";

export const Label = ({ title, path, description, publicURL, date}) => (
  
    <div className="margin-10-b">
  <Link to={path} className="link margin-15-b" id="path">
    <div className="grow row image-container">
    { <img className="cover-image" src={publicURL} /> }
      <div className="image-overlay">
      
        <h2 className="image-text"> <strong>{title} </strong><br /> {description} <br /> <span style={{fontSize: "0.69em"}}>{date} </span> </h2>
      </div>
    </div>
  </Link>
  </div>
);
export default function Projects() {
  return (
    <StaticQuery
      query={graphql`
        query Projects {
          allMarkdownRemark
  (sort: { fields: [frontmatter___date], order: DESC }
  ) {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                  description
                  displayImage {publicURL}
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
          <div className="row container-small pad-10-b pad-10-l">
            <div className="col-xs-12 ">
              <h1 className="margin-0-t is-blue" >Latest Recipes</h1>
              <div className="line margin-3-t margin-3-b" />
            </div>

            <Container fluid>
              <Row>
            <Col>
              {

              edges.map(item => (
                <div>
                <Label {...item.node.frontmatter} className="is-black"/>
                </div>
                
              ))
              }
            </Col>
            </Row>
            </Container>
          </div>
        );
      }}
    />
  );
}


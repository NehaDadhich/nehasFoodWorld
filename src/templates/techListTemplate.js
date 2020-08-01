import React, {Component} from "react";
import { graphql } from "gatsby";
import TechPreview from "../components/techPreview";
import Layout from "../components/layout";


class MakingOf extends Component {
  render() {
    const { data } = this.props;
    const allMarkdownRemark = data.allMarkdownRemark;
    const techArticles = allMarkdownRemark.edges
    return (
        <Layout>
            <div className="pad-2-b pad-8-l">
              <h2 className="margin-0-t is-black" >Making of</h2>

            <div className="row margin-0-l pad-5-t pad-5-r">
              {
                
              techArticles.map(({node}) => (
                <div className="col-xs-12 col-md-6">
                <div>
                <TechPreview {...node.frontmatter} className="is-black"/>
                </div>
                </div>
              ))
              }
            </div>
          </div>
        </Layout>
    )
  }
}

export default MakingOf

export const makingOfQuery = graphql`
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
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`;


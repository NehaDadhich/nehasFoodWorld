import React, {Component} from "react";
import { graphql, Link } from "gatsby";
import TechPreview from "../components/techPreview";
import SEO from "../components/seo";
import Layout from "../components/layout";
import {faHome} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class MakingOf extends Component {
  render() {
    const { data } = this.props;
    const allMarkdownRemark = data.allMarkdownRemark;
    const techArticles = allMarkdownRemark.edges
    return (
        <Layout>
           <SEO
        title={"Making of"}
        description={"The tech behind the website"}
      />
            <div className="pad-2-b pad-8-l pad-5-t">
            <div className="row margin-0-t is-black pad-2-l" style={{fontSize: '1.5em'}}>
            <Link to="/"> <FontAwesomeIcon className="icon-link" icon={faHome}/> </Link>
            <span className="is-black"> &nbsp;  {"<<"} Making of </span>
           </div>
           <h4 className="is-black pad-2-l">This website is open source and this sections contains a few articles on how this website is built. </h4>
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


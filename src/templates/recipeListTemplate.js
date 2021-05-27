import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import RecipePreview from "../components/recipePreview";
import SEO from "../components/seo";
import Layout from "../components/layout";
import {faHome} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createUniqueName } from "typescript";

class Recipes extends Component {
  render() {
    const  { data }  = this.props
    const allMarkdownRemark = data.allMarkdownRemark
    const recipes = allMarkdownRemark.edges
    const { numberOfPages, currentPage } = this.props.pageContext
    const isFirst = currentPage === 1;
    const isLast = currentPage === numberOfPages;
    const prevPagePath = currentPage - 1 === 1 ? '/recipes/' : '/recipes/' + (currentPage - 1).toString();
    const nextPagePath = '/recipes/' + (currentPage + 1).toString();
    return (
      <Layout>
         <SEO
        title={"Recipes"}
        description={"All recipes"}
      />
      <div className="pad-2-b pad-8-l margin-0-b pad-5-t">
          <div className="row margin-1-b pad-2-l" style={{fontSize: '1.5em'}}>
            <Link to="/"> <FontAwesomeIcon className="icon-link" icon={faHome}/> </Link>
            <span className="is-black"> &nbsp;  {"<<"} Latest Recipes </span>
           </div>
           <h4 className="is-black">Browse through all of my mouth-watering vegetarian recipes.</h4>
        <div className="row margin-0-l pad-5-t pad-5-r">
          {
          recipes.map(({node}) => {
            return (
            <div className="col-xs-12 col-md-4 margin-4-b">
            <div>
            <RecipePreview {...node.frontmatter} className="is-black"/>
            </div>
            </div>
          )})
            
          }
        </div> 
        <div className="center-div pad-3-b">
        <Link className="button-link margin-3-l" to={prevPagePath} >  
         <button className="custom-button" disabled={isFirst}>Previous </button>
         </Link>
      { Array.from({ length: 4}, (_, i) => {
          return (<Link className="button-link margin-3-l" to={`/recipes/${i === 0 ? '' : i + 1}`}>
                  <button className="custom-button"> {i + 1} </button>
                </Link>)
        })
      }
      <Link className="button-link margin-3-l" to={nextPagePath} >  
         <button className="custom-button" disabled={isLast}>Next </button>
         </Link>
      </div>
      </div>
      </Layout>
    );
  }
}

export default Recipes

export const recipeQuery = graphql`
query Recipes($skip: Int!, $limit: Int!, $slug: String!) {
  sitePage(path: { eq: $slug }) {
    context {
      limit
      skip
      numberOfPages
      currentPage
    }
  }
allMarkdownRemark(
    filter: { frontmatter: {type: {eq: "recipe"}} }
    sort: { fields: [frontmatter___date], order: DESC }
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        frontmatter {
          path
          title
          tags
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
}`;

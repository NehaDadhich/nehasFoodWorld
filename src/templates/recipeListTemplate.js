import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import RecipePreview from "../components/recipePreview";
import SEO from "../components/seo";
import Layout from "../components/layout";

class Recipes extends Component {
  render() {
    const  { data }  = this.props
    const allMarkdownRemark = data.allMarkdownRemark
    const recipes = allMarkdownRemark.edges
    const { numberOfPages } = this.props.pageContext
    return (
      <Layout>
         <SEO
        title={"Recipes"}
        description={"All recipes"}
      />
      <div className="pad-2-b pad-8-l margin-0-b pad-5-t">
          <h2 className="margin-0-t is-black pad-2-l" >Latest recipes</h2>

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
        <div className="center-div">
      {Array.from({ length: numberOfPages}, (_, i) => (
          <Link className="button-link margin-3-l"
            to={`/recipes/${i === 0 ? '' : i + 1}`}
          >
            <button className="custom-button">
            {i + 1}
          </button>
          </Link>
      ))}
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

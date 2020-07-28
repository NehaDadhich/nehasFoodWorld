import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import RecipePreview from "../components/recipePreview";
import Layout from "../components/layout";

class Recipes extends Component {
  render() {
    const  { data }  = this.props
    const allMarkdownRemark = data.allMarkdownRemark
    const posts = allMarkdownRemark.edges
    const { currentPage, numberOfPages } = this.props.pageContext
    return (
      <Layout>
      <div className="pad-2-b pad-8-l margin-0-b">
          <h2 className="margin-0-t is-black" >Latest recipes</h2>

        <div className="row margin-0-l pad-5-t pad-5-r">
          {
          posts.map(({node}) => {
            console.log({node})
            return (
            <div className="col-xs-12 col-md-4">
            <div>
            <RecipePreview {...node.frontmatter} className="is-black"/>
            </div>
            </div>
          )})
            
          }
        </div> 
        <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyle: 'none',
        padding: 0,
      }}
    >
      {Array.from({ length: numberOfPages - 1}, (_, i) => (
        <li
          key={`pagination-number${i + 1}`}
          style={{
            margin: 0,
          }}
        >
          <Link
            to={`/recipes/${i === 0 ? '' : i + 1}`}
            style={{
              padding: 4,
              textDecoration: 'none',
              color: i + 1 === currentPage ? '#ffffff' : '',
              background: i + 1 === currentPage ? '#007acc' : '',
            }}
          >
            {i + 1}
          </Link>
        </li>
      ))}
    </ul>
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

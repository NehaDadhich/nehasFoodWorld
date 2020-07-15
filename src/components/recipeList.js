import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import RecipePreview from "../components/recipePreview";

class Recipes extends Component {
  render() {
    const  data   = this.props
    console.log("Data " + data)
    const allMarkdownRemark = data.allMarkdownRemark
    console.log("AllMarkDown " + allMarkdownRemark)
    const posts = allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    return (
      <div className="pad-2-b pad-8-l margin-0-b">
          <h2 className="margin-0-t is-black" >Latest recipes</h2>

        <div className="row margin-0-l pad-5-t pad-5-r">
          {
          posts.map(({item}) => (
            <div className="col-xs-12 col-md-4">
            <div>
            <RecipePreview {...item.node.frontmatter} className="is-black"/>
            </div>
            </div>
          ))
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
      {Array.from({ length: numPages }, (_, i) => (
        <li
          key={`pagination-number${i + 1}`}
          style={{
            margin: 0,
          }}
        >
          <Link
            to={`/${i === 0 ? '' : i + 1}`}
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
    );
  }
}

export default Recipes

export const recipeQuery = graphql`
query Recipes($skip: Int!, $limit: Int!) {
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

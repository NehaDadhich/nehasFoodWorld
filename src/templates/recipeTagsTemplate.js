import React from "react"   
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RecipePreview from "../components/recipePreview"
import {faHome} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Tags = ( { pageContext, data} ) => {
    const { tag } = pageContext
    const allMarkdownRemark = data.allMarkdownRemark
    const taggedPosts = allMarkdownRemark.edges
    return (
    <Layout>
          <SEO
        title={`"${tag}"`}
        description={`Recipes Tagged with "${tag}"`}
      />
        <div className="pad-2-b pad-8-l margin-0-b pad-5-t">
        <div className="row margin-1-b pad-2-l" style={{fontSize: '1.5em'}}>
            <Link to="/"> <FontAwesomeIcon className="icon-link" icon={faHome}/> </Link>
            <span className="is-black"> &nbsp;  {"<<"} <Link className="link" to="/recipes/"> Latest recipes </Link> </span>
            <h3 className="is-black">Recipes tagged as <span className="is-pink">{tag} </span> </h3>
           </div>
        <div className="row margin-0-l pad-5-t pad-5-r">
          {
          taggedPosts.map(({node}) => {
            return (
            <div className="col-xs-12 col-md-4">
            <div>
            <RecipePreview {...node.frontmatter} className="is-black"/>
            </div>
            </div>
          )})
            
          }
        </div> 
      </div>
        </Layout>)
}
export default Tags
export const recipeTagsQuery = graphql`
query RecipeTags($tag: String) {
    recipeTagsGroup: allMarkdownRemark(filter: { frontmatter: {type: {eq: "recipe"}} }) {
      group(field: frontmatter___tags) {
       tag: fieldValue
      }
    }
  allMarkdownRemark(
      filter: { frontmatter: {tags: { in: [$tag] }, type: {eq: "recipe"}} }
      sort: { fields: [frontmatter___date], order: DESC }
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

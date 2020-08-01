import React from "react"   
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RecipePreview from "../components/recipePreview"

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
        <div className="pad-2-b pad-8-l margin-0-b">
          <h2 className="margin-0-t is-black" >Recipes tagged as <span className="is-blue">{tag}</span></h2>

        <div className="row margin-0-l pad-5-t pad-5-r">
          {
          taggedPosts.map(({node}) => {
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

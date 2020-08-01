import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RecipePreview from "../components/recipePreview";
//import MakingOfList from "../templates/techListTemplate";
import Search from "../components/search";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

export default function Start() {
    return (
    <>
    <Layout className="is-white-bg">
        <div>
            <SEO title="Home" />
    <div className="margin-5-b"> 
            <Search />
        </div>
        <div className="pad-5-b">
            {recipeQuery()}
            <div className="pad-15-r right-div">
            <Link className="button-link" to="/recipes"> <button className="custom-button"> Yum, I want more. </button> </Link>
            </div>
            </div>
        <div className="pad-1-t pad-5-b">
        {/* <MakingOfList limit={2} /> */}
        <div className="pad-10-r right-div">
        <Link className="button-link" to="/making-of"> <button className="custom-button"> Wow, show me tech. </button> </Link>
            </div>
         </div>
        </div>
    </Layout>
    </>);
 }

 export const recipeQuery = () => {
     return   <StaticQuery
     query={graphql`
query TopTwoRecipes {
  allMarkdownRemark
(
filter: { frontmatter: {type: {eq: "recipe"}} }
sort: { fields: [frontmatter___date], order: DESC }
limit: 3
) {
    edges {
      node {
        id
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
}`}
render={data => {
  let { edges } = data.allMarkdownRemark; 
  return  <>
  <div className="pad-5-l pad-5-r">
  <div className="pad-5-l pad-5-r pad-2-b">
      <h1 className="is-black">Latest Recipes </h1>
      </div>
  <div className="row pad-5-l pad-5-r"> 
  {edges.map(item => (
     
    <div className="col-xs-12 col-md-4">
    <div>
    <RecipePreview {...item.node.frontmatter} className="is-black"/>
    </div>
  </div> ))}
    </div>
    </div>
    </>;
 }
}
 />
 }

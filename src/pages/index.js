import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RecipePreview from "../components/recipePreview";
import TechPreview from "../components/techPreview";
import Search from "../components/search";
import { Link } from "gatsby";
import { graphql } from "gatsby";

class Start extends Component {
  render() {
    const {data} = this.props;
    const recipes = data.allMarkdownRemark.edges;
    const techArticles = data.TopTechArticles.edges;
  return (
    <>
    <Layout className="is-white-bg">
        <div>
            <SEO title="Home" />
    <div className="margin-5-b"> 
            <Search />
        </div>
        <div className="pad-5-b">
            {recipeSection(recipes)}
            <div className="pad-15-r pad-1-t right-div">
            <Link className="button-link" to="/recipes"> <button className="custom-button"> Yum, I want more. </button> </Link>
            </div>
            </div>
        <div className="pad-1-t pad-5-b">
             {techSection(techArticles)}
        <div className="pad-10-r right-div">
        <Link className="button-link" to="/making-of"> <button className="custom-button"> Wow, show me tech. </button> </Link>
            </div>
         </div>
        </div>
    </Layout>
    </>);
  }
}

export default Start

 export const recipeSection = (recipes) => {
  return  <>
  <div className="pad-5-l pad-5-r">
  <div className="pad-5-l pad-5-r pad-2-b">
      <h1 className="is-black">Latest Recipes </h1>
      </div>
  <div className="row pad-5-l pad-5-r"> 
  {recipes.map(({node}) => (
     <div className="col-xs-12 col-md-4">
    <div>
    <RecipePreview {...node.frontmatter} className="is-black"/>
    </div>
  </div> ))}
    </div>
    </div>
    </>;
 }

 export const techSection = (techArticles) => {
   return <>
    <div className="pad-2-b pad-8-l">
       <h1 className="margin-0-t is-black margin-2-l" >Making of</h1>
    <div className="row margin-0-l pad-5-t pad-5-r">
          { techArticles.map(({node}) => (
                <div className="col-xs-12 col-md-6">
                <div>
                <TechPreview {...node.frontmatter} className="is-black"/>
                </div>
                </div>
          ))}
      </div>    
      </div>   
   </>;
 }

 export const query = graphql`{
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
  TopTechArticles: allMarkdownRemark
(
filter: { frontmatter: {type: {eq: "tech"}} }
sort: { fields: [frontmatter___date], order: DESC }
limit: 2
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
}`;



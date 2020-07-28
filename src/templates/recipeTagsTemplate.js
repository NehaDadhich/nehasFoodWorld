// import React from "react"
// import PropTypes from "prop-types"
// import { Link, graphql } from "gatsby"
// import kebabCase from "lodash/kebabCase"

// const TagsPage = ({
//   data: {
//     allMarkdownRemark: { group },
//     site: {
//       siteMetadata: { title },
//     },
//   },
// }) => (
//   <div>
//     <div>
//       <h1>Tags</h1>
//       <ul>
//         {group.map(tag => (
//           <li key={tag.fieldValue}>
//             <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
//               {tag.fieldValue} ({tag.totalCount})
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// )
// TagsPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired
//       ),
//     }),
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }),
//     }),
//   }),
// }
// export default TagsPage
// export const pageQuery = graphql`
// query RecipeTags($skip: Int!, $limit: Int!, $slug: String!) {
//   sitePage(path: { eq: $slug }) {
//     context {
//       limit
//       skip
//       numberOfPages
//       currentPage
//     }
//   }
// allMarkdownRemark(
//     filter: { frontmatter: {type: {eq: "recipe"}} }
//     sort: { fields: [frontmatter___date], order: DESC }
//     limit: $limit
//     skip: $skip
//   ) {
//     edges {
//       node {
//         frontmatter {
//           path
//           title
//           tags
//           description
//           displayImage {
//             childImageSharp {
//               fluid(maxWidth: 500) {
//                 ...GatsbyImageSharpFluid_noBase64
//               }
//             }
//           }
//           date(formatString: "MMMM DD, YYYY")
//         }
//       }
//     }
//   }
// }`;

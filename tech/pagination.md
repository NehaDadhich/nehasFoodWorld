---
path: "/making-of-pagination"
title: "Pagination"
date: 2020-07-31T00:00:00.000Z
tags: ["Paginaton"]
type: "tech"
---
*Note:* The code can be viewed at <a href="https://github.com/NehaDadhich/nehasFoodWorld" target="_blank" rel="noopener noreferrer" class="link">  Neha's Food World Github</a>.

While increasing the number of 

Firstly, the following dependencies were installed through npm:
- gatsby-remark-images
- gatsby-remark-copy-linked-files
- gatsby-transformer-sharp
- gatsby-plugin-sharp

The recipeList.js file is responsible for displaying the list of latest recipes on the home page. The GraphQL query was edited to fetch the image, description, title and date as:

```Javascript{numberLines: true}
  query={graphql`
        query Projects {
          allMarkdownRemark
  (
    filter: { frontmatter: {type: {eq: "recipe"}} }
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
            edges {
              node {
                id
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
        }
      `} 
```
This was exported to edges as:

```Javascript{numberLines: true}
data => {
        let { edges } = data.allMarkdownRemark;
```

And then passed to a Label component as: 

```Javascript{numberLines: true}
  <Label {...item.node.frontmatter} className="is-black"/>
```

The Label component creates the image card as: 

```Javascript{numberLines: true}
export const Label = ({ title, path, description, displayImage, date}) => (
  
    <div className="margin-10-b margin-5-r">
  <Link to={path} className="link margin-15-b" id="path">
    <div className="grow image-card is-light-grey-bg">
    <Img
          fluid={displayImage.childImageSharp.fluid}
          className="cover-image"
          
        />
      <div className="image-card-container is-black">
        <h2> <strong>{title} </strong></h2> 
        <p className="margin-1-b">{description}</p>
        <p className="small-text">{date}</p>
      </div>
    </div>
  </Link>
  </div>
);
```

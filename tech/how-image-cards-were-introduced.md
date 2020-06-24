---
path: "/how-image-cards-were-introduced"
title: "How image cards were introduced"
date: 2020-06-01T00:00:00.000Z
tags: ["Image Cards","Gatsby images"]
type: "tech"
---

I wanted the home page to display the images from the markdown as cards with description of images. This articles explains how this was achieved. 

Firstly, I installed the following dependencies through npm: 
- gatsby-remark-images
- gatsby-remark-copy-linked-files
- gatsby-transformer-sharp
- gatsby-plugin-sharp

The recipeList.js file is responsible for displaying the list of latest recipes on the home page. I edited the graphQL query to fetch the image, description, title and date as following: 

```Javascript 
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
This was exported to edges as follows

```Javascript 
data => {
        let { edges } = data.allMarkdownRemark;
```

And then passed to a Label component as follows: 

```Javascript 
  <Label {...item.node.frontmatter} className="is-black"/>
```

The Lable component creates the image card as: 

```Javascript 
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

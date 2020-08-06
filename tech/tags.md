---
path: "/making-of-tags"
title: "Tags"
date: 2020-07-31T00:00:00.000Z
tags: ["Tags"]
type: "tech"
---
*Note:* The code can be viewed at <a href="https://github.com/NehaDadhich/nehasFoodWorld" target="_blank" rel="noopener noreferrer" class="link">  Neha's Food World Github</a>.

By adding tags to recipes, it is easier now to find related recipes. I followed the Gatsby tags documentation to achieve this. In this article, I will discuss the tags code of this website.

To fetch tags from GraphQL, the tags were added to each as below as: 
```markdown{numberLines: true}
tags: [ "Spaghetti", "Vegan", "Spicy"]
```

The following query was added to the gatsby-node.js to fetch the tags
```GraphQL{numberLines: true}
recipeTagsGroup: allMarkdownRemark(filter: { frontmatter: {type: {eq: "recipe"}} }) {
            group(field: frontmatter___tags) {
              fieldValue
            }
          }
```
Then page creation for each tag was defined as below: 
```JavaScript{numberLines: true}
  const tags = recipeResult.data.recipeTagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: recipeTagsTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
};
```

The recipeTagsTemplate.js defines the tag page. For this the data is fetched using the following query to filter out the recipes of the requested tag: 

```GraphQL{numberLines: true}
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
  }
```

Then the result i.e., edges are stored in taggedPosts and for each taggedPost a RecipePreview is created as below: 
```JavaScript{numberLines: true}
   taggedPosts.map(({node}) => {
            console.log({node})
            return (
            <div className="col-xs-12 col-md-4">
            <div>
            <RecipePreview {...node.frontmatter} className="is-black"/>
            </div>
            </div>
```



---
path: "/making-of-pagination"
title: "Pagination"
date: 2020-07-31T00:00:00.000Z
tags: ["Paginaton"]
type: "tech"
---
*Note:* The code can be viewed at <a href="https://github.com/NehaDadhich/nehasFoodWorld" target="_blank" rel="noopener noreferrer" class="link">  Neha's Food World Github</a>.

As the number of recipes will be always increasing on this website, pagination was important for better organisation. I followed the Gatsby documentation on pagination to achieve this. In this article, I will discuss the pagination code of this website.

Firstly, I added the following code to gatsby-node.js

  ```Javascript{numberLines: true}
  const recipeItem = recipeResult.data.allMarkdownRemark.edges;
  const itemsPerPage = 6;
  const numberOfPages = Math.ceil(recipeItem.length/ itemsPerPage);

  Array.from({length: numberOfPages}).forEach((_,i) => {
    createPage({
      path: i === 0 ? `/recipes` : `/recipes/${i + 1}`,
      component: recipeListTemplate,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        numberOfPages,
        currentPage: i + 1,
        slug: i === 0 ? `/recipes` : `/recipes/${i + 1}`,
      },
    });
  });
  ```
  The above code snippet gets the recipes data queried into recipeItem. Each recipes page will display 6 recipes. The number of pages that should be created will be the largest integer of the total number of recipes by 6. The loop will create recipes page which will be used in the recipeListTemplate to display 6 recipes. 

  In the recipeListTemplate, the recipes are queried from the GraphQL as below: 

```Javascript{numberLines: true}
  query={graphql`
       query Recipes($skip: Int!, $limit: Int!, $slug: String!) {
  sitePage(path: { eq: $slug }) {
    context {
      limit
      skip
      numberOfPages
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
}`} 
```

Then I created a pagination component as below: 

```JavaScript{numberLines: true}
export default function Pagination ({currentPage, numberOfPages, prefixUrl}) {
    const prevPagePath = currentPage - 1 === 1 ? '/'+ prefixUrl +'/' : '/'+ prefixUrl +'/' + (currentPage - 1).toString();
    const nextPagePath = '/' + prefixUrl + '/' + (currentPage + 1).toString();
    var pageNumberList = [];
    if(currentPage === numberOfPages && currentPage - 3 >= 1){
        pageNumberList.push(currentPage - 3);
    }
    if(currentPage - 2 >= 1) {
        pageNumberList.push(currentPage - 2);
    }
    if(currentPage > 1){
        pageNumberList.push(currentPage - 1);
    }
    pageNumberList.push(currentPage);
    if(currentPage !== numberOfPages){
        pageNumberList.push(currentPage + 1);
    }
    if(currentPage + 2 <= numberOfPages){
        pageNumberList.push(currentPage + 2);
    }
    if(currentPage === 1 && currentPage + 3 <= numberOfPages){
        pageNumberList.push(currentPage + 3);
    }
    return  (<div>
       {currentPage > 1 && (
                    <Link className="button-link margin-3-l" to={prevPagePath} >  
                      <button className="pagination-button"> Previous </button>
                      </Link>
                  )}
                  { Array.from({ length: 4}, (_, i) => {
                    return (<Link className="button-link margin-3-l" to={pageNumberList[i] === 1 ? "/" + prefixUrl  : "/" + prefixUrl  + "/" + pageNumberList[i]}>
                  <button className="pagination-button"> {pageNumberList[i]} </button>
                </Link>)
        })
      }
       {currentPage !== numberOfPages && (
                      <Link className="button-link margin-3-l" to={nextPagePath}>
                        <button className="pagination-button"> Next</button>
                      </Link>
        )}
    </div>)
}
}
```
Then used it in Recipes component as 

```JavaScript{numberLines: true}
class Recipes extends Component {
  render() {
    ...
    const { numberOfPages, currentPage } = this.props.pageContext
    ...
    ...
    <Pagination currentPage={currentPage} numberOfPages={numberOfPages} prefixUrl="recipes"/>
    ...
```
The first page is created at /recipes and the following will be created as /recipes/2 and so on.
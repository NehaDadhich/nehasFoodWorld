const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const LogTemplate = path.resolve(`./src/templates/LogTemplate.js`);

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  
  // const posts = result.data.allMarkdownRemark.edges
  // const postsPerPage = 4
  // const numberOfPages = Math.ceil(posts.length/ postsPerPage)
  // Array.from({length : numberOfPages}).forEach((i) => {
  //   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //     createPage({
  //       path: i === 0 ? node.frontmatter.path : node.frontmatter.path + `/${i + 1}`,
  //       component: LogTemplate, 
  //       context: {
  //         limit: postsPerPage,
  //         skip: i * postsPerPage,
  //         numberOfPages,
  //         currentPage: i + 1
  //       },
  //     })
  //   })
  // });
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: LogTemplate
    });
  });
};

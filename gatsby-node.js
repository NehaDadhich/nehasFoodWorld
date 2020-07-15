const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`./src/templates/pageTemplate.js`);
  const recipeListTemplate = path.resolve(`./src/components/recipeList.js`);


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

  const items = result.data.allMarkdownRemark.edges;
  const itemsPerPage = 3;
  const numberOfPages = Math.ceil(items.length/ itemsPerPage);

  Array.from({length: numberOfPages}).forEach((_,i) => {
    createPage({
      path: i === 0 ? `/recipes` : `/recipes/${i + 1}`,
      component: recipeListTemplate,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        numberOfPages,
        currentPage: i + 1,
      },
    });
  });

  items.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: pageTemplate
    });
  });
};

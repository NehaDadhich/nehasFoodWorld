const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`./src/templates/pageTemplate.js`);
  const recipeListTemplate = path.resolve(`./src/templates/recipeListTemplate.js`);
  // const recipeTagTemplate = path.resolve(`./src/templates/recipeTagsTemplate.js`)


  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              tags
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
        slug: i === 0 ? `/recipes` : `/recipes/${i + 1}`,
      },
    });
  });

  items.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: pageTemplate
    });
  });

  // // Extract tag data from query
  // const tags = result.data.tagsGroup.group
  // // Make tag pages
  // tags.forEach(tag => {
  //   createPage({
  //     path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
  //     component: recipeTagTemplate,
  //     context: {
  //       tag: tag.fieldValue,
  //     },
  //   })
  // })
};

const path = require(`path`);
const _ = require("lodash");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`./src/templates/pageTemplate.js`);
  const recipeListTemplate = path.resolve(`./src/templates/recipeListTemplate.js`);
  const techListTemplate = path.resolve(`./src/templates/techListTemplate.js`);
  const recipeTagsTemplate = path.resolve(`./src/templates/recipeTagsTemplate.js`)


  const recipeResult = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: {type: {eq: "recipe"}} }) {
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
          recipeTagsGroup: allMarkdownRemark(filter: { frontmatter: {type: {eq: "recipe"}} }) {
            group(field: frontmatter___tags) {
              fieldValue
            }
          }
        }
  `);

  const techResult = await graphql(`{
    allMarkdownRemark(filter: { frontmatter: {type: {eq: "tech"}} }) {
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
      }`)

  // Handle errors
  if (recipeResult.errors || techResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

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

  recipeItem.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: pageTemplate
    });
  });

  const techItem = techResult.data.allMarkdownRemark.edges;

  techItem.forEach(({node}) => {
    createPage({
      path: node.frontmatter.path,
      component: pageTemplate
    });
  });

  actions.createPage({
    path: "/making-of",
    component:  techListTemplate
  })

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

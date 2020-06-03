const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `UlitmateLogger`,
    description: `A single space to log all your errors.`,
    author: `@nehaDadhich`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-use-dark-mode`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/nehasFoodWorldIcon.png`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          `gatsby-remark-copy-images`,
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/markdown`
      }
    }, 
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
            options: {
                // Fields to index
                fields: [
                    'title',
                    'tags',
                ],
                // How to resolve each field's value for a supported node type
                resolvers: {
                    // For any node of type MarkdownRemark, list how to resolve the fields' values
                    MarkdownRemark: {
                        title: (node)=> node.frontmatter.title,
                        tags: (node) => node.frontmatter.tags,
                        path: (node) => node.frontmatter.path
    }, 
  }
}
}
  ]
};

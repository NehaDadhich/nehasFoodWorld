const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Neha's Food World`,
    description: `An easy to use simple food website`,
    author: `@nehaDadhich`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-use-dark-mode`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-bundle-analyzer`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/nehasFoodWorldIcon.png`
      }
    },
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     develop: true, // Enable while using `gatsby develop`
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
         
          {
            resolve: `gatsby-remark-images`
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/recipes`
      }
    }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/tech`
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

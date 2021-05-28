require("dotenv").config({
  path: `.env`,
});

const googlePlugins = [];

if (
  process.env.CLIENT_EMAIL &&
  process.env.PRIVATE_KEY &&
  process.env.VIEW_ID
) {
  googlePlugins.push({
    resolve: `gatsby-source-google-analytics-reporting-api`,
    options: {
      email: process.env.CLIENT_EMAIL,
      key: process.env.PRIVATE_KEY.replace(new RegExp('\\\\n', '\g'), '\n'),
      viewId: process.env.VIEW_ID,
      startDate: `2019-09-01`
    },
  });
}

module.exports = {
  siteMetadata: {
    title: `Neha's Food World`,
    siteUrl: `https://nehasfoodworld.web.app/`,
    description: `A food website with tech articles.`,
    author: `@nehaDadhich`
  },
  plugins: [
     { 
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: '',
          cookieName: 'gatsby-gdpr-google-analytics', 
          anonymize: true, 
          allowAdFeatures: false 
        },
        environments: ['production', 'development']
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: '',
        respectDNT: true,
        head: false
      },
    },
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
                fields: [
                    'title',
                    'tags',
                ],
                resolvers: {
                    MarkdownRemark: {
                        title: (node)=> node.frontmatter.title,
                        tags: (node) => node.frontmatter.tags,
                        path: (node) => node.frontmatter.path,
    }, 
  }
}
}, 
{
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      {
        resolve: `gatsby-remark-prismjs`,
        options: {
          // Class prefix for <pre> tags containing syntax highlighting;
          // defaults to 'language-' (e.g. <pre class="language-js">).
          // If your site loads Prism into the browser at runtime,
          // (e.g. for use with libraries like react-live),
          // you may use this to prevent Prism from re-processing syntax.
          // This is an uncommon use-case though;
          // If you're unsure, it's best to use the default value.
          classPrefix: "language-",
          // This is used to allow setting a language for inline code
          // (i.e. single backticks) by creating a separator.
          // This separator is a string and will do no white-space
          // stripping.
          // A suggested value for English speakers is the non-ascii
          // character '›'.
          inlineCodeMarker: null,
          // This lets you set up language aliases.  For example,
          // setting this to '{ sh: "bash" }' will let you use
          // the language "sh" which will highlight using the
          // bash highlighter.
          aliases: {},
          // This toggles the display of line numbers globally alongside the code.
          // To use it, add the following line in gatsby-browser.js
          // right after importing the prism color scheme:
          //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
          // Defaults to false.
          // If you wish to only show line numbers on certain code blocks,
          // leave false and use the {numberLines: true} syntax below
          showLineNumbers: false,
          // If setting this to true, the parser won't handle and highlight inline
          // code used in markdown i.e. single backtick code like `this`.
          noInlineHighlight: false,
          // This adds a new language definition to Prism or extend an already
          // existing language definition. More details on this option can be
          // found under the header "Add new language definition or extend an
          // existing language" below.
          languageExtensions: [
            {
              language: "superscript",
              extend: "javascript",
              definition: {
                superscript_types: /(SuperType)/,
              },
              insertBefore: {
                function: {
                  superscript_keywords: /(superif|superelse)/,
                },
              },
            },
          ],
          // Customize the prompt used in shell output
          // Values below are default
          prompt: {
            user: "root",
            host: "localhost",
            global: false,
          },
          // By default the HTML entities <>&'" are escaped.
          // Add additional HTML escapes by providing a mapping
          // of HTML entities and their escape value IE: { '}': '&#123;' }
          escapeEntities: {},
        },
      },
    ],
  },
}
  ].concat(googlePlugins),
};

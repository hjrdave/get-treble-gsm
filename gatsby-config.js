module.exports = {
  siteMetadata: {
    title: `Treble`,
    description: `Treble is a global state management library built on React Hooks and Context API. Treble's goal is to provide a simple way to manage global state in your React app by providing an easy setup, little boilerplate, and a straight forward API.`,
    siteUrl: "https://treblegsm.org",
    author: `David A. Sanders`,
    twitterHandler: '@hjr_dave',
    apiNavLinks: [
      {
        id: 0,
        section: 'Introduction',
        menuItems: [
          {
            id: 0,
            text: 'What is TrebleGSM?',
            path: '/api/introduction/what-is-treblegsm'
          },
          {
            id: 1,
            text: 'Getting Started',
            path: '/api/introduction/getting-started'
          },
          {
            id: 2,
            text: 'Managing State',
            path: '/api/introduction/managing-state'
          }
        ]
      },
      {
        id: 1,
        section: 'Advanced',
        menuItems: [
          {
            id: 3,
            text: 'How TrebleGSM Works',
            path: '/api/advanced/how-treble-gsm-works'
          },
          {
            id: 4,
            text: 'Core Concepts',
            path: '/api/advanced/core-concepts'
          },
          {
            id: 5,
            text: 'Extending Stores',
            path: '/api/advanced/extending-stores'
          },
          {
            id: 6,
            text: 'Scoping Stores',
            path: '/api/advanced/scoping-stores'
          },
          {
            id: 7,
            text: 'Persisting State',
            path: '/api/advanced/persisting-state'
          },
          {
            id: 8,
            text: 'Managing Lists',
            path: '/api/advanced/managing-lists'
          },
          {
            id: 9,
            text: 'Class Support',
            path: '/api/advanced/class-support'
          }
        ]
      },
      {
        id: 2,
        section: 'Middleware',
        menuItems: [
          {
            id: 10,
            text: 'What is Middleware?',
            path: '/api/middleware/what-is-middleware'
          },
          {
            id: 11,
            text: 'Middleware Data Object',
            path: '/api/middleware/middleware-data-object'
          }
        ]
      },
      {
        id: 3,
        section: 'Modules',
        menuItems: [
          {
            id: 12,
            text: 'What are Modules?',
            path: '/api/modules/what-are-modules'
          },
          {
            id: 13,
            text: 'Create a Module',
            path: '/api/modules/create-a-module'
          },
          {
            id: 14,
            text: 'API Reference',
            path: '/api/modules/api-reference'
          },

        ]
      },

      {
        id: 4,
        section: 'API References',
        menuItems: [
          {
            id: 15,
            text: 'TrebleGSM',
            path: '/api/references/treble-gsm'
          },
          {
            id: 16,
            text: 'Treble Core',
            path: '/api/references/treble-core'
          },
          {
            id: 17,
            text: 'Treble Persist',
            path: '/api/references/treble-persist'
          },
          {
            id: 18,
            text: 'Treble List Manager',
            path: '/api/references/treble-list-manager'
          }
        ]
      }
    ]
  },
  //pathPrefix: `get-treble-gsm`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
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
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },

    },
    {
      resolve: 'gatsby-schema-field-absolute-path',
      options: {
        // a. single directory
        dirs: 'src/images'
      }
    },
    {
      resolve: 'gatsby-plugin-lunr',
      options: {
        languages: [{ name: 'en' }],
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'content', store: true, attributes: { boost: 5 } },
          { name: 'date', store: true },
          { name: 'path', store: true }
        ],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            content: node => node.rawMarkdownBody,
            date: node => node.frontmatter.date,
            path: node => node.frontmatter.path
          }
        },
        filename: 'search_index.json',
      }
    }
  ],
}

module.exports = {
  siteMetadata: {
    title: `Get Treble-GSM`,
    description: `Treble-GSM docs`,
    author: `David A. Sanders`,
  },
  pathPrefix: `/get-treble-gsm`,
  assetPrefix: `https://hjrdave.github.io`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
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
    `gatsby-transformer-remark`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


const path = require(`path`);


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  //Instatiate Post Templates
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/post-template.tsx`),
      context: {}, // additional data can be passed via context
    })
  })
}



//Creates absolute path for post featuredImages
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type Frontmatter @infer {
    featuredImage: File @fileByAbsolutePath(path: "src/images")
  }

  type MarkdownRemark implements Node @infer {
    frontmatter: Frontmatter
  }
  `
  createTypes(typeDefs)
}




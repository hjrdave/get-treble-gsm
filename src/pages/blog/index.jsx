import React from "react";
import { Link, graphql } from "gatsby";
import PostLink from "../../components/post-link";
import PageContainer from '../../components/page-container';
import PageContent from '../../components/page-content';



function BlogPage({ data: { allMarkdownRemark: { edges } } }) {

  return (
    <>
      <PageContainer>
        <PageContent>
          <h1>Blog</h1>
          <h3 className='pt-4'>Recent Posts</h3>
          {
            edges.filter((edge) => !!edge.node.frontmatter.date)
              .map((edge) => {
                return <PostLink key={edge.node.id} post={edge.node} />
              })
          }

        </PageContent>
      </PageContainer>
    </>
  )
}


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`

export default BlogPage

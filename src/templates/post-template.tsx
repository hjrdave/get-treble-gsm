import React from "react"
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import PageContainer from '../components/page-container';
import PageContent from '../components/page-content';

interface Props {
  data: any
}

export default function Template({ data, }: Props) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const { title, date, featuredImage } = frontmatter;

  return (
    <>
      <PageContainer title={title}>
        <PageContent>
          <Img fluid={featuredImage.childImageSharp.fluid} />
          <h1 className='pt-4'>{title}</h1>
          <p>{date}</p>
          <div
            className="blog-post-content pt-4"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </PageContent>
      </PageContainer>
    </>
  )
}

//graphQL query
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

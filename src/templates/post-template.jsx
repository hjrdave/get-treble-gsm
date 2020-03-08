import React, {Fragment, useEffect} from "react"
import { graphql, Link } from "gatsby";
import Img from 'gatsby-image';
import PageContainer from '../components/page-container';
import PageContent from '../components/page-content';
import DocNav from '../components/doc-nav';
import uniqid from 'uniqid';


export default function Template({ data, }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const { title, date, path } = frontmatter;

  useEffect(() => {

  },[])
  return (
    <>
      <PageContainer title={title}>
        <div className='d-flex'>
        <DocNav/>
        <PageContent docs={true}>
        <div
              className="blog-post-content pt-4"
              dangerouslySetInnerHTML={{ __html: html }}
            />
        </PageContent>
        </div>
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
      }
    }
  }
`

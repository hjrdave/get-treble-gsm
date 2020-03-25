import React, {Fragment, useEffect} from "react"
import { graphql, Link } from "gatsby";
import PageContainer from '../components/page-container';
import PageContent from '../components/page-content';
import DocNav from '../widgets/doc-nav';
import SEO from '../components/seo';
import './_post-template.scss';


export default function Template({ data, location}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark;
  const { title, date, path } = frontmatter;

  useEffect(() => {

  },[])
  return (
    <>
    <SEO
      title={title}
      description={excerpt}
    />
      <PageContainer activePath={location}>
        <div className='d-lg-flex'>
        <DocNav/>
        <PageContent docs={true}>
          <h1 className='pt-4'>{title}</h1>
          <div
              className="blog-post-content"
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
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

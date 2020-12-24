import React, { Fragment, useEffect } from "react";
import { graphql } from "gatsby";
import PageContainer from '../components/page-container';
import PageContent from '../components/page-content';
import APINav from '../widgets/api-nav';
import DocPostMenu from '../components/doc-post-menu';
import SEO from '../components/seo';
import styles from './styles.module.scss';


export default function APIDocsTemplate({ data, location }) {
  const { markdownRemark } = data;
  const { frontmatter, html, excerpt } = markdownRemark;
  const { title, date, path, subMenu } = frontmatter;

  return (
    <>
      <SEO
        title={title}
        description={excerpt}
      />
      <PageContainer activePath={location} className={styles.apiDocsTemplate}>
        <div className='d-lg-flex'>
          <APINav />
          <PageContent docs={true}>
            <div className='row'>
              <div className='col-12 col-lg-9'>
                <h1 className='pt-4'>{title}</h1>
                <div
                  className={`${styles.apiDocsContent} pr-lg-4`}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
              <div className='col-3 d-none d-lg-block'>
                <DocPostMenu subMenu={subMenu} path={path} />
              </div>
            </div>
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
        date
        path
        title
        subMenu {
          text
          path
        }
      }
    }
  }
`

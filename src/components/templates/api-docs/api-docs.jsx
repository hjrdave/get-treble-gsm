import React from "react";
import { graphql } from "gatsby";
import PageContainer from '../../organisms/page-container';
import PageContent from '../../organisms/page-content';
import { Col, Row } from 'react-bootstrap';
import APINav from '../../organisms/api-nav-items';
import SupportRow from '../../organisms/support-row';
import APISecondaryNav from '../../organisms/api-secondary-nav';
import SEO from '../../atoms/seo';
import NextPrevBtnRow from '../../organisms/next-previous-btn-row';
import styles from './apiDocs.module.scss';


export default function APIDocs({ data, location }) {
  const { markdownRemark, site } = data;
  const { apiNavLinks } = site?.siteMetadata;
  const { frontmatter, html, excerpt } = markdownRemark;
  const { title, path, subMenu } = frontmatter;


  return (
    <>
      <SEO
        title={title}
        description={excerpt}
      />
      <PageContainer activePath={location} className={styles.apiDocsTemplate}>
        <div className={`d-lg-flex pb-4 ${styles.apiDocsContentRow}`}>
          <div className='d-none d-lg-block'>
            <APINav menuData={apiNavLinks} />
          </div>
          <div className={`px-4 ${styles.pageContent}`}>
            <Row>
              <Col lg={'12'}>
                <h1 className='pt-4'>{title}</h1>
                <div
                  className={`${styles.apiDocsContent}`}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <NextPrevBtnRow menuData={apiNavLinks} location={location} />
              </Col>
            </Row>
          </div>
          <div className='d-none d-lg-block'>
            <APISecondaryNav subMenu={subMenu} path={path} />
          </div>
        </div>
        <div className={styles.rowSkewedBottom} id='api-docs-skewed-row'></div>
        <PageContent bkGradient style={{ marginTop: '-50px' }}>
          <SupportRow location={location} />
        </PageContent>
      </PageContainer>
    </>
  )
}

//graphQL query
export const pageQuery = graphql`
  query($path: String!) {
    site {
    siteMetadata {
      apiNavLinks {
        id
        menuItems {
          id
          path
          text
        }
        section
      }
    }
  }
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

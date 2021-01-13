import React from "react";
import { graphql } from "gatsby";
import PageContainer from '../components/organisms/page-container';
import PageContent from '../components/organisms/page-content';
import { Col, Row } from 'react-bootstrap';
import APINav from '../widgets/api-nav';
import SupportRow from '../components/organisms/support-row';
import APISecondaryNav from '../components/organisms/api-secondary-nav';
import SEO from '../components/atoms/seo';
import NextPrevBtnRow from '../components/organisms/next-previous-btn-row';
import styles from './styles.module.scss';


export default function APIDocs({ data, location }) {
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
        <div className={`d-lg-flex pb-4 ${styles.apiDocsContentRow}`}>
          <div className='d-none d-lg-block'>
            <APINav />
          </div>
          <div className={`px-4 ${styles.pageContent}`}>
            <Row>
              <Col lg={'12'}>
                <h1 className='pt-4'>{title}</h1>
                <div
                  className={`${styles.apiDocsContent}`}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                {/* <NextPrevBtnRow /> */}
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

import React, { Fragment, useEffect } from "react";
import { graphql } from "gatsby";
import PageContainer from '../components/organisms/page-container';
import PageContent from '../components/organisms/page-content';
import { Button } from 'react-bootstrap';
import APINav from '../widgets/api-nav';
import Image from '../images/register';
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
        <div className={`d-lg-flex pb-4 ${styles.apiDocsContentRow}`}>
          <APINav />
          <PageContent docs={true} >
            <div className='row'>
              <div className='col-12 col-lg-9'>
                <h1 className='pt-4'>{title}</h1>
                <div
                  className={`${styles.apiDocsContent} pr-lg-4`}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <div className='row pt-4'>
                  <div className='col-12 d-flex justify-content-between'>
                    <Button variant="outline-primary">Primary</Button>
                    <Button variant="outline-primary">Primary</Button>
                  </div>
                </div>
              </div>
              <div className='col-3 d-none d-lg-block'>
                <DocPostMenu subMenu={subMenu} path={path} />
              </div>
            </div>

          </PageContent>

        </div>
        <div className={styles.rowSkewedBottom} id='api-docs-skewed-row'></div>
        <PageContent bkGradient style={{ marginTop: '-100px' }}>

          <div className='row pt-4 mt-4 mb-4 d-flex justify-content-center'>
            <div className='col-8 col-lg-12 pt-4'>
              {/* <ContentCard> */}
              <div className={`${styles.rowlogoGithub} home-logo-github d-flex justify-content-center`}>
                <Image name={'logoGithub'} />
              </div>
              <h5 className='pt-3 text-center'>Want to Support this Project?</h5>
              <div className='d-flex justify-content-center'>
                <Button className='px-4 py-2 mt-3' style={{ backgroundColor: '#20222A', borderColor: '#20222A', borderRadius: '25px', }}><a href='https://github.com/hjrdave/treble-gsm' target='_blank' style={{ color: 'white', textDecoration: 'none' }}>Contribute</a></Button>
              </div>
              {/* </ContentCard> */}
            </div>
          </div>
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

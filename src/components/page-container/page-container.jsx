import React from 'react';
import Layout from '../layout';
import SEO from '../seo';

function PageContainer({ children, title }) {
  return (
    <>
      <Layout>
        <SEO title={title} />
        <>
          {children}
        </>
      </Layout>
    </>
  )
}

export default PageContainer;
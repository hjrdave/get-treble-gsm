import React from 'react';
import Layout from '../layout';
import SEO from '../seo';


interface Props {
  title: string,
  children: JSX.Element | JSX.Element[]
}

function PageContainer({ children, title }: Props) {
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
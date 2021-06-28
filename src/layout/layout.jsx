/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";
import "../styles.global.scss";
import SEO from '../components/atoms/seo';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO />
      <Header siteTitle={'Get Treble GSM'} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout

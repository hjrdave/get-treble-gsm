/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../header";
import Footer from "../footer";
import "./_layout.scss";

interface Props {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {
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

      <Header siteTitle={'Protrans'} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout

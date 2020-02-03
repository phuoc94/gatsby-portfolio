/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

/*import Header from "./header"*/
import Menu from "./nav-bar"
import Jumpo from "./jumpo"

import "../css/layout.css"

const Layout = ({ children, pageTitle }) => {
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
      <Menu siteTitle={data.site.siteMetadata.title} />
      <Jumpo pageTitle={pageTitle} />
      <div className="main">
        <main>{children}</main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Phuoc Nguyen</p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

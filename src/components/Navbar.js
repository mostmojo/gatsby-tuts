import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }`
  )

  const { title } = data.site.siteMetadata
  /* ^ The above is the same as but it's just destructured / unpacked
  const title  = data.site.siteMetadata.title
  */

  return (
    <nav>
      <h1>{ title }</h1>
      <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

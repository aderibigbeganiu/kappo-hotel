import React, { useEffect } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, graphql, useStaticQuery } from "gatsby"
import layoutStyle from "./layout.module.scss"
import { Jumbotron } from "react-bootstrap"

const Layout = props => {
  useEffect(() => {
    document.title = `${props.name} • KAPPO HOTEL & SUITES`
  })

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <div>
      <Jumbotron className={layoutStyle.cover}>
        <Navbar />
        <div className={layoutStyle.coverText}>
          <h1 className={layoutStyle.title}>
            {data.site.siteMetadata.title.toUpperCase()}
          </h1>
          <p className={layoutStyle.description}>
            {data.site.siteMetadata.description}
          </p>
          <p className={layoutStyle.coverBtn}>
            <Link
              className="btn btn-primary btn-lg"
              to="/booking"
              role="button"
            >
              BOOK NOW
            </Link>
          </p>
        </div>
      </Jumbotron>
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout

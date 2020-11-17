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
    <div className={layoutStyle.container}>
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
              to="/contact"
              role="button"
            >
              CONTACT US
            </Link>
          </p>
        </div>
      </Jumbotron>
      <div className={layoutStyle.content}>{props.children}</div>
      <Footer />
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"
      ></script>
    </div>
  )
}

export default Layout

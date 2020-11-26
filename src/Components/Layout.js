import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import layoutStyle from "./layout.module.scss"
import { Jumbotron } from "react-bootstrap"
import Helmet from "react-helmet"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { graphql, useStaticQuery } from "gatsby"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
        }
      }
    }
  `)
  return (
    <div className={layoutStyle.container}>
      <GatsbySeo
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        canonical={data.site.siteMetadata.siteUrl}
        openGraph={{
          url: data.site.siteMetadata.siteUrl,
          title: data.site.siteMetadata.title,
          description: data.site.siteMetadata.description,
          images: [
            {
              url: "https://kappohotel.com/logo.jpg",
            },
          ],
          site_name: data.site.siteMetadata.siteUrl,
        }}
        twitter={{
          handle: "@kappohotels",
          site: "@kappohotels",
          cardType: "summary_large_image",
        }}
      />
      <Helmet title={`${props.name} • KAPPO HOTELS & SUITES`} defer={false}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossorigin="anonymous"
        />
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
      </Helmet>
      <Jumbotron className={layoutStyle.cover}>
        <Navbar />
      </Jumbotron>
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout

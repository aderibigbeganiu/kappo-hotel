import React from "react"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import { graphql, useStaticQuery } from "gatsby"
import homelayoutStyle from "./homeLayout.module.scss"
import { Jumbotron, Button } from "react-bootstrap"
import Helmet from "react-helmet"
import HomeNavbar from "./HomeNavbar"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const HomeLayout = props => {
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
    <div className={homelayoutStyle.container}>
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
      <Jumbotron className={homelayoutStyle.cover}>
        <HomeNavbar />
        <div className={homelayoutStyle.coverText}>
          <h1 className={homelayoutStyle.title}>
            {data.site.siteMetadata.title.toUpperCase()}
          </h1>
          <p className={homelayoutStyle.description}>
            {data.site.siteMetadata.description}
          </p>
          <p className={homelayoutStyle.coverBtn}>
            <a href="tel:+2349040075259">
              <Button varient="primary" size="lg">
                Book Now
              </Button>
            </a>
          </p>
        </div>
      </Jumbotron>
      <div className={homelayoutStyle.content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default HomeLayout

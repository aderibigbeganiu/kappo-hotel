/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `KAPPO HOTELS & SUITES`,
    siteUrl: `https://www.kappohotel.com`,
    description: `Excellent Customer Experience within high standard facilities`,
    author: `kappohotels`,
    keywords: [
      "hotels in badagry",
      "hotel",
      "hotels",
      "kappo hotel",
      "kapo hotels",
    ],
    image: "/logo.jpg",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-next-seo",
  ],
}

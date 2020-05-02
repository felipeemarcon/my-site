/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteMetadata = require("./config/metadata")

module.exports = {
  /* Your site config here */
  siteMetadata,
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Felipe Marcon`,
        short_name: `Marcon`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#F73131`,
        display: `standalone`,
        icon: `src/assets/images/icon_red.png`,
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: `#F73131`,
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackindId: "UA-83728372",
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: `IBM Plex Sans`,
            variants: [`400`, `500`, `700`, `900`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    `gatsby-plugin-offline`,
  ],
}

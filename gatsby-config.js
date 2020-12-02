require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `ecommerce kdrama`,
    description: `ecommerce`,
    author: `@mkt`,
    titleTemplate: `@s | Ecommerce`,
    url: `https://kdrama-ecommerce.netlify.app/`,
    iamge: ``,
    twitterUsername: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve("./src/components/layout"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: process.env.SNIPCHART,
        js: `https://cdn.snipcart.com/themes/v3.0.26/default/snipcart.js`,
        styles: `https://cdn.snipcart.com/themes/v3.0.26/default/snipcart.css`,
        autopop: true,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: ["strc/css/main.css"],
      },
    },
  ],
}

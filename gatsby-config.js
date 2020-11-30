require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `ecommerce kdrama`,
    description: `ecommerce`,
    author: `@mkt`,
    titleTemplate: `@s | Ecommerce`,
    url: `https://gatsby-airtable-design-project.netlify.app/`,
    iamge: `mainBcg.png`,
    twitterUsername: `@john_smilga`,
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
  ],
}

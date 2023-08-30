require("dotenv").config("./.env");

const sanityConfig = require("./sanity-config");



module.exports = {
  siteMetadata: {
    title: `BebyBlog`,
    siteUrl: "https://Google.com",
    description: `Bebyblog, блог для мам и их малышей, а также про здоровье наших детей`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...sanityConfig,
        // projectId: "eatqyeu8",
        // dataset: "production2",
        // watchMode: false,
        // token: process.env.SANITY_TOKEN,

        // Find your project ID and dataset in `sanity.json` in your studio project
        // token: "ваш_api_token", // опционально, если у вас есть приватный dataset
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
};

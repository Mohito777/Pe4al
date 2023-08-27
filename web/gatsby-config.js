const { isProd } = require('sanity');
const sanityConfig = require('./sanity-config');

require('dotenv').config('./.env');

module.exports = {
  siteMetadata: {
    title: `BebyBlog`,
    siteUrl: 'https://Google.com',
    description: `Bebyblog, блог для мам и их малышей, а также про здоровье наших детей`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...sanityConfig,
        projectId: 'eatqyeu8',
        dataset: 'production2',
        token: process.env.SANITY_TOKEN,
        watchmode: !isProd,
        overlayDrafts: !isProd,
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

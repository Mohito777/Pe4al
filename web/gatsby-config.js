require('dotenv').config();

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
        projectId: 'eatqyeu8',
        dataset: 'production',
        // token: "ваш_api_token", // опционально, если у вас есть приватный dataset
      },
    },
  ],
};

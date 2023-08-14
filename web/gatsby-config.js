require('dotenv').config('./.env');

module.exports = {
  siteMetadata: {
    title: `BebyBlog`,
    siteUrl: `https://bebyblog.sanity.studio/desk/blog;7ec45f34-5386-40e1-bb64-a923c5b94af4`,
    description: `Bebyblog, блог для мам и их малышей, а также про здоровье наших детей`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
  ],
};

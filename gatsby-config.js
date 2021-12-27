require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const path = require('path');
module.exports = {
  siteMetadata: {
    title: `Gatsby Shopify Starter`,
    description: `🛒 Theme to build a blazing simple and fast store with Gatsby and Shopify.`,
    author: `raj-inovexia`,
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'ShopifyStore',
        // This is field under which it's accessible
        fieldName: 'store',
        // Url to query from
        url: `https://${process.env.SHOP_NAME}.myshopify.com/api/2022-01/graphql.json`,
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          'X-Shopify-Storefront-Access-Token': `${process.env.SHOPIFY_ACCESS_TOKEN}`,
          'Content-Type': 'application/graphql',
        },
        // refetchInterval: 60,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};

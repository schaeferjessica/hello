require('dotenv').config();

module.exports = {
  pathPrefix: `/hello`,
  siteMetadata: {
    title: 'Jessica Schäfer',
    siteUrl: `https://jessicaschaefer.netlify.app/`,
    description: `Jessica Schäfer, frontend developer from berlin`,
    keywords: 'Jessica Schäfer, frontend developer',
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jessica-schaefer`,
        short_name: `jessica`,
        start_url: `/`,
        background_color: `#FFF6E2`,
        theme_color: `#10287F`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};

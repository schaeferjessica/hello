module.exports = {
  pathPrefix: `/hello`,
  siteMetadata: {
    title: 'jessica schaefer',
    siteUrl: `https://schaeferjessica.github.io/hello/`,
    description: `Jessica Schäfer, frontend developer from berlin`,
  },
  plugins: [
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
  ],
};

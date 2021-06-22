require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "gats-weaseler",
    description: "weasel-maker",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://mindchase.ghost.io`,
        contentApiKey: `${process.env.GATSBY_CONTENT_API}`,
        version: `v3`, // Ghost API version, optional, defaults to "v3".
        // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
      },
    },
  ],
};

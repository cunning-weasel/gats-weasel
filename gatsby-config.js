require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "mindchase",
    titleTemplate: "%s · easy growing for everyone",
    description: "Help everyone to grow beyond their limits, to expand their horizon and to find what they are looking to achieve in life.",
    url: "https://www.mindchase.de",
    image: "/images/favicon.ico",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://mindchase-2.ghost.io`,
        contentApiKey: `${process.env.GATSBY_CONTENT_API}`,
        version: `v3`, // Ghost API version, optional, defaults to "v3".
        // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
      },
    },
  ],
};

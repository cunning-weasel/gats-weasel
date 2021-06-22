require("dotenv").config();
const { githubApiQuery } = require("./src/componenets/github-api");

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
    {
      resolve: `gatsby-source-ghost`,
      options: {
          apiUrl: `https://mindchase.ghost.io`,
          contentApiKey: `299b8991120f25ccd6ccda78de`,
          version: `v3` // Ghost API version, optional, defaults to "v3".
                        // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
      }
   },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: "https://api.github.com/graphql", // default Github GraphQL v4 API endpoint

        // token: required by the GitHub API
        token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,

        // GraphQLquery: defaults to a search query
        graphQLQuery: githubApiQuery,

        // variables: defaults to variables needed for a search query
        variables: {
          github_login: process.env.GITHUB_LOGIN,
        },
      },
    },
  ],
};

module.exports = {
  siteMetadata: {
    siteUrl: "https://test-gatsby.genomagames.com",
    title: "Genoma Games",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `./src/blog`,
      },
    },
  ],
};

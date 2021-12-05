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
        path: `${__dirname}/src/blog`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [
          {
            userAgent: "*",
            disallow: ["/"],
          },
        ],
      },
    },
  ],
};

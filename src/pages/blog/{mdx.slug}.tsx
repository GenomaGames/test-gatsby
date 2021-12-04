import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        hero_image_alt
        hero_image_credit_text
        hero_image_src {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

const BlogPost = ({ data }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image_src);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={heroImage}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p>{data.mdx.frontmatter.hero_image_credit_text}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export default BlogPost;

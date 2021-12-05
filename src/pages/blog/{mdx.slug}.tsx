import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import Layout from "../../components/layout";

export const query = graphql`
  query BlogPostPage($id: String) {
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

type BlogPostPageData = {
  mdx: {
    frontmatter: {
      date: string;
      title: string;
      hero_image_alt: string;
      hero_image_credit_text: string;
      hero_image_src: ImageDataLike;
    };
    body: string;
  };
};

type BlogPostPageProps = PageProps<BlogPostPageData>;

const BlogPostPage: React.FunctionComponent<BlogPostPageProps> = ({ data }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image_src);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {heroImage ? (
        <GatsbyImage
          image={heroImage}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
      ) : (
        ""
      )}
      <p>{data.mdx.frontmatter.hero_image_credit_text}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export default BlogPostPage;

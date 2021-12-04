import * as React from "react";
import { Link, graphql, PageProps } from "gatsby";

import Layout from "../../components/layout";

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
        }
        id
        slug
      }
    }
  }
`;

const BlogPage = ({ data }: PageProps) => {
  return (
    <Layout pageTitle="Blog">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Published at: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export default BlogPage;

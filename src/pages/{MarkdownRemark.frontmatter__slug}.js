import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "./services.css";
import { StaticImage } from "gatsby-plugin-image";
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div className="content">
        <div className="item">
          <StaticImage src="../images/massage.jpg" />
        </div>

        <div classname="item">
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;

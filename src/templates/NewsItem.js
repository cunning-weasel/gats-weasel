import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import Container from "react-bootstrap/Container";

const NewsItem = (context) => {
  // pull in title, img + img metadata, then full html
  const NewsItemData = useStaticQuery(
    graphql`
      query NewsItem($slug: String) {
        ghostPost(slug: { eq: $slug }) {
          ghostId
          title
          slug
          html
          feature_image
        }
      }
    `
  );

  // pageContext gives me the slug I need
  console.log("______context:", context);
  console.log("pageContext slug:", context.pageContext.slug);
  console.log("pageContext slug:", context.pageContext.html);

  // then  pull in author data (if needed, add to news page), post-tag,
  // and some other cta ?

  return (
    <Layout>
      <Seo title={context.pageContext.slug} />
      <Container>
        <h1>{context.pageContext.slug}</h1>
        <p>by author on date? + link to author?</p>
        <img src={context.pageContext.feature_image} />
        <div
          dangerouslySetInnerHTML={{ __html: context.pageContext.html }}
        />
      </Container>
    </Layout>
  );
};

export default NewsItem;

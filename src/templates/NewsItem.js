import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image'

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

  // access context via pageContext
  
  return (
    <Layout>
      <Seo title={context.pageContext.slug} />
      <Container fluid>
        <h1>{context.pageContext.slug}</h1>
        <p>by -Link- author -Link- on date?</p>
        <Image src={context.pageContext.feature_image} />
        <div
          dangerouslySetInnerHTML={{ __html: context.pageContext.html }}
        />
      </Container>
    </Layout>
  );
};

export default NewsItem;

import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image'

const NewsItem = ({ data }) => {

  // access context via pageContext
  const post = data.ghostPost
  
  return (
    <Layout>
      {/* <Seo title={context.pageContext.slug} /> */}
      <Container fluid>
        {/* <h1>{context.pageContext.slug}</h1> */}
        <p>by -Link- author -Link- on date?</p>
        <Image src={post.feature_image} 
          alt={post.title}
        />
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Container>
    </Layout>
  );
};

export default NewsItem;

// pull in title, img + img metadata, then full html
export const NewsItemData = graphql`
query ($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      slug
      html
      feature_image
    }
  }
`;
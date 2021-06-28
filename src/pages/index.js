import * as React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Banner from "../components/Banner";
import PopUp from "../components/Modal";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const IndexPage = () => {

  return (
    <Layout>
      <SEO />
      <PopUp />
      <Header />
      <Body />
      <Banner />
    </Layout>
  );
};

export default IndexPage;

import * as React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import PopUp from "../components/Modal";
import Layout from "../components/Layout";
import Seo from "../components/seo";

const IndexPage = () => {

  return (
    <Layout>
      <Seo />
      <PopUp />
      <Header />
      <Body />
      <Banner />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

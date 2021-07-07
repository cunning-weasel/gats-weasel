import * as React from "react";
import Body from "../components/Body";
import PopUp from "../components/Modal";
import Layout from "../components/Layout";
import Seo from "../components/seo";

const IndexPage = () => {

  return (
    <Layout>
      <Seo />
      {/* <PopUp /> */}
      <Body />
    </Layout>
  );
};

export default IndexPage;

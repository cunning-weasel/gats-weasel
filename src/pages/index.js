import * as React from "react";
import Body from "../components/Body";
//import PopUp from "../components/Modal";
import Layout from "../components/Layout";
import Seo from "../components/seo";
//import { StaticImage } from "gatsby-plugin-image"



const IndexPage = () => {

  return (
    <Layout>
      {/* <StaticImage src="../../images/background/website_with_logo.jpg" alt="logo" /> */}
      <Seo />
      {/* <PopUp /> */}
      <Body />
    </Layout>
  );
};

export default IndexPage;

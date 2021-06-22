import * as React from "react";
import Nav from "../componenets/Nav";
import Footer from "../componenets/Footer";
import Header from "../componenets/Header";
import Body from "../componenets/Body";
import { StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
  return (
    <>
      <Nav />
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default IndexPage;

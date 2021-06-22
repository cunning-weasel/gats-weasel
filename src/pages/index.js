import * as React from "react";
import Nav from "../componenets/Nav";
import Footer from "../componenets/Footer";
import Header from "../componenets/Header";
import Body from "../componenets/Body";
import PopUp from "../componenets/Modal";
// import { StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
  return (
    <>
      <Nav />
      <PopUp />
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default IndexPage;

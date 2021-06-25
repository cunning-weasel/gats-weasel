import * as React from "react";
import Nav from "../componenets/Nav";
import Footer from "../componenets/Footer";
import Header from "../componenets/Header";
import Body from "../componenets/Body";
import Banner from "../componenets/Banner";
import PopUp from "../componenets/Modal";

const IndexPage = () => {

  return (
    <>
      <Nav />
      <PopUp />
      <Header />
      <Body />
      <Banner />
      <Footer />
    </>
  );
};

export default IndexPage;

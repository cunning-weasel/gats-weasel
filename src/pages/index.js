import * as React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from "../components/Body";
import Banner from "../components/Banner";
import PopUp from "../components/Modal";

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

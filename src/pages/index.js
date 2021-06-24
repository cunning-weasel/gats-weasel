import * as React from "react";
import Nav from "../componenets/Nav";
import Footer from "../componenets/Footer";
// import Header from "../componenets/Header";
import Body from "../componenets/Body";
// import Banner from "../componenets/Banner";

const IndexPage = () => {
  return (
    <>
      <Nav />
      {/* <Header /> */}
      <Body />
      {/* <Banner /> - commenting this out to move to body */}
      <Footer />
      
    </>
  );
};

export default IndexPage;

import * as React from "react";
import Nav from "../componenets/Nav";
import Footer from "../componenets/Footer";
import Header from "../componenets/Header";
import Body from "../componenets/Body";
import Banner from "../componenets/Banner";
import PopUp from "../componenets/Modal";
import { useState } from "react"
import styled, {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles } from '../componenets/Themes.js'


const IndexPage = () => {

  const [theme, setTheme] = useState("light")

  const themeToggler = () =>{
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
  
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Nav />
        <PopUp />
        <Header />
        <Body />
        <Banner />
        <Footer/>
  
      </ThemeProvider>
    </>
  );
    
};
 
export default IndexPage;

import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <Jumbotron fluid className="bg-image">
      <StaticImage src="../../images/background/website_with_logo.jpg" alt="" 
      style={{
         width: "100%"
      }}
       
      
      />
    </Jumbotron>
  );
};

export default Header;

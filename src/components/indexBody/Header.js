import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <Jumbotron fluid className="bg-image">
<<<<<<< HEAD
      <StaticImage src="../../images/background/website_with_logo.jpg" alt="" 
      style={{
         width: "100%"
      }}
       
      
=======
      <StaticImage
        src="../images/background/website_with_logo.jpg"
        alt=""
        style={{ 
          width: "100%",
          height: "100%"
         }}
>>>>>>> stashing before pulling
      />
    </Jumbotron>
  );
};

export default Header;

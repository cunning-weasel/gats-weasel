import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <Jumbotron fluid className="p-5 bg-image">
      <Container>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <StaticImage
              src="../images/background/website_with_logo.jpg"
              alt="easy growing for everyone"
            />
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Header;

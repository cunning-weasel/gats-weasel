import * as React from "react";
// import { Link } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'





const Nav = () => {
  return (


    <nav className="navbar navbar-expand-lg bg-primary">


      <Navbar bg="primary" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">about</Nav.Link>
            <Nav.Link href="#workshops">workshops</Nav.Link>
            <Nav.Link href="#digitalcampus">digitalcampus</Nav.Link>
            <Nav.Link href="#news">news</Nav.Link>
            <Nav.Link href="#games">games</Nav.Link>
            <Nav.Link href="#contact">contact</Nav.Link>

          </Nav>
          </Container>
        </Navbar>
    
    </nav>
  );
};

export default Nav;




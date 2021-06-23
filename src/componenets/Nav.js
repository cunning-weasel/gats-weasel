import * as React from "react";
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'








const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg ">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link to="/" className="text-white nav-link">
              Home
            </Link>
        </li>

        <li className="nav-item">
            <Link to="/about" className="text-white nav-link">
              About us
            </Link>
        </li>

        <li className="nav-item">
            <Link to="/workshops" className="text-white nav-link">
            Workshops
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/game" className="text-white nav-link">
            Game
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/news" className="text-white nav-link">
            News
            </Link>
          </li>





      </ul>
      
    </nav>
  );
};

export default Nav;

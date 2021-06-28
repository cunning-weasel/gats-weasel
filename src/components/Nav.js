import * as React from "react";
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'

import './Style.scss';



const Nav = () => {

  return (
    <div className="navbar.transparent.navbar-inverse .navbar-inner transparent container-nav">
      <nav className="navbar navbar-dark  navbar-expand-lg navbar-inner">
        <ul className="navbar-nav">
          <li className="nav-item marg">
            <Link to="/" className="text-white nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item marg">
            <Link to="/about" className="text-white nav-link">
              About us
            </Link>
          </li>

          <li className="nav-item marg">
            <Link to="/workshops" className="text-white nav-link">
              Workshops
            </Link>
          </li>

          <li className="nav-item marg">
            <Link to="/game" className="text-white nav-link">
              Game
            </Link>
          </li>

          <li className="nav-item marg">
            <Link to="/news" className="text-white nav-link">
              News
            </Link>
          </li>

        </ul>

      </nav>
      
     </div>
  );
};

export default Nav;

import * as React from "react";
import { Link } from 'gatsby'


const Nav = ({ children }) => {
  return (
    <main>
      <ul>
        <li>
            <Link to="/">
              Home
            </Link>
        </li>

        <li>
            <Link to="/about">
              About
            </Link>
        </li>

        <li>
            <Link to="/workshops">
            Workshops
            </Link>
          </li>
        
          <li>
            <Link to="/digitalcampus">
            Digital campus
            </Link>
          </li>

          <li>
            <Link to="/news">
            News
            </Link>
          </li>
    

          <li>
            <Link to="/contact">
            Contact
            </Link>
          </li>

        

      </ul>
      {children}
    </main>
  );
};

export default Nav;




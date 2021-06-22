import * as React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import { Link, useStaticQuery, graphql } from 'gatsby'


const Nav = ({ children }) => {
  return (
    <main>
      <ul>
        <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
        </li>

        <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
        </li>

        <li className={navLinkItem}>
            <Link to="/workshops" className={navLinkText}>
            Workshops
            </Link>
          </li>
        
          <li className={navLinkItem}>
            <Link to="/digitalcampus" className={navLinkText}>
            Digital campus
            </Link>
          </li>

          <li className={navLinkItem}>
            <Link to="/news" className={navLinkText}>
            News
            </Link>
          </li>
    

          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
            Contact
            </Link>
          </li>

        

      </ul>
      {children}
    </main>
  );
};

export default Nav;




import * as React from "react";
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'





const Nav = () => {
  return (




    <nav className="navbar navbar-expand-lg bg-primary">

      {/* <StaticImage
              alt="Logo mindChase"
              src="../images/logo.png"
            /> */}

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li>
            <Link to="/" className="text-white text-decoration-none " >
              Home
            </Link>
        </li>

        <li>
            <Link to="/about" className="text-white text-decoration-none">
              About
            </Link>
        </li>

        <li>
            <Link to="/workshops" className="text-white text-decoration-none">
            Workshops
            </Link>
          </li>
        
          <li>
            <Link to="/digitalcampus" className="text-white text-decoration-none ">
            Digital campus
            </Link>
          </li>

          {/* <li>
            <Link to="/news" className="text-white text-decoration-none">
            News
            </Link>
          </li>
     */}

          <li>
            <Link to="/contact" className="text-white text-decoration-none">
            Contact
            </Link>
          </li>

        

      </ul>

    </nav>
  );
};

export default Nav;




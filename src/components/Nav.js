import * as React from "react";
import { Navbar, navItem } from "./Nav.module.scss";
import { Link } from "gatsby";
import "./Nav.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const Nav = () => {
  const [showMobile, setShowMobile] = React.useState(false);
  const showMobileNav = (e) => {
    e.preventDefault();
    if (showMobile) {
      document.getElementById("navbarSupportedContent").style.display = "none";
    } else {
      document.getElementById("navbarSupportedContent").style.display = "block";
    }
    setShowMobile(!showMobile);
  };

  return (
    <div className={Navbar}>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-transparent ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <StaticImage
              className="navbar-brand"
              src="../images/Logos/mindchase-logo-transparent.png"
              alt=""
              style={{
                width: "150px",
                height: "40px",
                float: "left",
              }}
            />
          </Link>
          <button
            onClick={showMobileNav}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={navItem}>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className={navItem}>
                <Link className="nav-link" to="/workshops">
                  Workshops
                </Link>
              </li>
              <li className={navItem}>
                <li>
                  <a href="https://campus.mindchase.de" className="nav-link">
                    Digital Campus
                  </a>
                </li>
              </li>
              <li className={navItem}>
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li className={navItem}>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {showMobile && (
                <li className="nav-item dropdown">
                  <ul
                    className="dropdown-menu"
                    aria-aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/workshops">
                        Workshops
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/news">
                        News
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://campus.mindchase.de"
                        className="dropdown-item"
                      >
                        Digital Campus
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

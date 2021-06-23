import * as React from "react";
//import { Link } from "gatsby";

const Footer = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      referepolicy="no-referrer"/>
      <div className="wrapper">
        <div className="socialicons">
          <a href="https://www.instagram.com/mindchase2020/" title="Instagram" className="icon">
            <i className="fab fa-instagram"></i>
            <a href="https://www.linkedin.com/company/mindchase" title="LinkedIn" className="icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
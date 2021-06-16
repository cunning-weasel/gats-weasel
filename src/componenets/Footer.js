import * as React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div>
      <h2 id="contact">let's grow</h2>
      <p>get in touch</p>
      <button>
        <Link to="/projects">all projects</Link>
      </button>
    </div>
  );
};

export default Footer;

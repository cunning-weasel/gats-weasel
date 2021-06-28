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
      <a
        href="https://www.linkedin.com/in/paul-bongers/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a href="https://github.com/cunning-weasel">GitHub</a>
      <a href="mailto:paulbongers22@gmail.com">Email me</a>
    </div>
  );
};

export default Footer;

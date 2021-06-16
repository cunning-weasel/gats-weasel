import * as React from "react";
import { Link } from "gatsby";

const Body = () => {
  return (
    <div>
      <h2 id="whatido">how i can help</h2>
        <p>what i do</p>
        <img
          src="img/icons8-omnichannel-100.png"
          alt="digital marketing and sales"
        />
      <h3>marketing</h3>
        <p>sem (organic & paid), marketing && sales automation.</p>
        <img
          src="img/icons8-module-96.png"
          alt="content management system build and design incl. DNS and Hosting"
        />
      <h3>web management</h3>
        <p>CMS build and design, DNS, hosting, security & tech- seo.</p>
        <img src="img/icons8-console-96.png" alt="web development" />
        <h3>software development</h3>
        <p>
          full stack (MERN) web development and app development, testing and
          security.
        </p>

      <h2 id="projects">projects</h2>
        <p>
          open-source contribution is part of my work ethos. Feel free to take a
          look at some of my projects here
        </p>
        <button>
          <Link to="/projects">all projects</Link>
        </button>
      <img src="" alt="" />
        <a href="https://www.linkedin.com/in/paul-bongers/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/cunning-weasel">GitHub</a>
        <a href="mailto:paulbongers22@gmail.com">Email me</a>
    </div>
  );
};

export default Body;


import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Body = () => {
  return (
    <>
      {/* what i do */}
      <div>
        <h2 id="whatido" className="text-warning" >how i can help</h2>
        <p>what i do</p>
        <StaticImage
          src="https://image.flaticon.com/icons/png/512/1998/1998087.png"
          alt="marketing and sales"
        />
        <h3>marketing</h3>
        <p>sem (organic & paid), marketing && sales automation.</p>
        <StaticImage
          src="https://image.flaticon.com/icons/png/512/2920/2920277.png"
          alt="content management system build, DNS and Hosting"
        />
        <h3>web management</h3>
        <p>CMS build and design, DNS, hosting, security & tech- seo.</p>
        <StaticImage 
          src="https://image.flaticon.com/icons/png/512/1055/1055656.png" 
          alt="web site management"
        />
        <h3>software development</h3>
        <p>
          full stack (MERN) web development and app development, testing and
          security.
        </p>
      </div>
      {/* projects */}
      <div>
        <h2 id="projects">projects</h2>
        <p>
          open-source contribution is part of my work ethos. Feel free to take a
          look at some of my projects here
        </p>
        <button>
          <Link to="/projects">all projects</Link>
        </button>
        <StaticImage
          src="https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80"
          alt="dark night with stars"
        />
      </div>
      {/* social */}
      <div>
        <h2>i'm social</h2>
        <p>
          follow me on twitter
          <span role="img" alt="finger pointing left">
            👈
          </span>
          or linkedin
          <span role="img" alt="finger pointing down">
            👇
          </span>
        </p>
        <a
          className="twitter-timeline"
          data-width="500"
          data-height="650"
          data-theme="dark"
          href="https://twitter.com/P_Bongers?ref_src=twsrc%5Etfw"
        >
          Tweets by P_Bongers
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
    </>
  );
};

export default Body;

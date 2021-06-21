import * as React from "react";

const Nav = ({ children }) => {
  return (
    <main>
      <ul>
        <li>
        <a href="/#contact">contacts</a>
        </li>
        <li>
          <a href="/#projects">projects</a>
        </li>
        <li>
        <a href="/#whatido">what i do</a>
        </li>
      </ul>
      {children}
    </main>
  );
};

export default Nav;

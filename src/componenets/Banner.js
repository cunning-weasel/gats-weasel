import * as React from "react";
import "./Banner.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function Banner() {
  return (
    <div className="container">
      <div className="banner-info">
        <p>Our Partners</p>
        <Link to="https://digitalcareerinstitute.org/">
          <StaticImage
            src="../images/dci.png"
            alt="DCI"
            layout="fixed"
            width={200}
            height={200}
          />
        </Link>
      </div>
    </div>
  );
}

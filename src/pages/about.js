import * as React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { StaticImage } from "gatsby-plugin-image";

// markup
const AboutPage = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col">
            <StaticImage
              alt="Marco, the only man on a team"
              src="../images/Marco/marco.jpg"
              layout="fixed"
              width={300}
              height={300}
            />
          </div>

          <div className="col">
            <StaticImage
              alt="Karo, CEO of mindchase"
              src="../images/Karo/karo.JPG"
              layout="fixed"
              width={300}
              height={300}
            />
          </div>

          <div className="col">
            <StaticImage
              alt="Phyllis"
              src="../images/Phyllis/phyllis.JPG"
              layout="fixed"
              width={300}
              height={400}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <StaticImage
              alt="Kathleen"
              src="../images/Kathleen/kathleen.JPEG"
              layout="fixed"
              width={300}
              height={300}
            />
          </div>
          <div className="col">
            <StaticImage
              alt="Franzi, second CEO of mindchase"
              src="../images/Franzi/franzi.jpg"
              layout="fixed"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;

import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import Button from "react-bootstrap/Button";
import {
  overlay,
  hoverMe,
  text,
  roundedCircle,
  cardBackground,
} from "./about.module.scss";

const AboutPage = () => {
  return (
    <>
      <Layout>
        <Seo title="About" />

        <div className="container">
          <div className="row ">
            <div className="col-sm-4 col-lg-4">
              <div className={hoverMe}>
                <div className="card">
                  <div className={cardBackground}>
                    <StaticImage
                      src="../images/team/Karo/karo_2.JPG"
                      alt="Karo, CEO of mindchase"
                      className={roundedCircle}
                    />
                    <div className="card-body">
                      <div className={overlay}>
                        <h5 className={text}>
                          “Hi, my name is Karo and I am most motivated by team
                          spirit and office dogs.”
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-4">
              <div className={hoverMe}>
                <div className="card">
                  <div className={cardBackground}>
                    <StaticImage
                      src="../images/team/Marco/marco.jpg"
                      alt="Marco, the only man on a team"
                      className={roundedCircle}
                    />
                    <div className="card-body">
                      <div className={overlay}>
                        <h5 className={text}>
                          “Hi, I am Marco and I enjoy inspiring by simplicity as
                          well as sportive competitions with myself.”
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-4">
              <div className={hoverMe}>
                <div className="card">
                  <div className={cardBackground}>
                    <StaticImage
                      src="../images/team/Phyllis/phyllis_1.JPG"
                      alt="Phyllis"
                      className={roundedCircle}
                    />
                    <div className="card-body">
                      <div className={overlay}>
                        <h5 className={text}>
                          “Hey, my name is Phyllis and I am enthusiastic about
                          self-development and traveling to unusual places.”
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-md-center">
            <div className="col-sm-4 col-lg-4">
              <div className={hoverMe}>
                <div className="card">
                  <div className={cardBackground}>
                    <StaticImage
                      src="../images/team/Kathleen/kathleen_1.JPEG"
                      alt="Kathleen"
                      className={roundedCircle}
                    />
                  </div>
                  <div className="card-body">
                    <div className={overlay}>
                      <h5 className={text}>
                        “Hello, my name is Kathleen and I am  passionate about checking out
                        new tools and I love to cook all day long.”
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-4">
              <div className={hoverMe}>
                <div className="card">
                  <div className={cardBackground}>
                    <StaticImage
                      src="../images/team/Franzi/franzi_1.jpg"
                      alt="Franzi, second CEO of mindchase"
                      className={roundedCircle}
                    />
                    <div className="card-body">
                      <div className={overlay}>
                        <h5 class={text}>
                          “Hej, I am Franzi an out of box thinker with a
                          weakness for coffee and post it’s.”
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutPage;

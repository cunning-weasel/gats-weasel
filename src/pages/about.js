import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import {
  overlay,
  hoverMe,
  text,
  roundedCircle,
  cardBackground,
  card,
  campusButton,
} from "./about.module.scss";

const AboutPage = () => {
  return (
    <>
      <Layout>
        <Seo title="About" />

        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-4">
              <div className={hoverMe}>
                <div className={`card ${card}`} >
                  <div className={cardBackground}>
                    <StaticImage
                      src="../images/team/Karo/karo-2.JPG"
                      alt="Karo, CEO of mindchase"
                      className={roundedCircle}
                    />
                    <div className="card-body">
                      <div className={overlay}>
                        <h5 className={text}>
                          “Hi, my name is <b>Karo</b> and I am most motivated by team
                          spirit and office dogs.”
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className={hoverMe}>
                <div className={`card ${card}`} >
                  <div className={cardBackground}>
                    <StaticImage
                      src="../images/team/Marco/marco.jpg"
                      alt="Marco, the only man on a team"
                      className={roundedCircle}
                    />
                    <div className="card-body">
                      <div className={overlay}>
                        <h5 className={text}>
                          “Hi, I am <b>Marco</b> and I enjoy inspiring by simplicity as
                          well as sportive competitions with myself.”
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className={hoverMe}>
                <div className={`card ${card}`} >
                  <div className={cardBackground}>
                    <StaticImage
                      src="../images/team/Phyllis/phyllis-1.JPG"
                      alt="Phyllis"
                      className={roundedCircle}
                    />
                    <div className="card-body">
                      <div className={overlay}>
                        <h5 className={text}>
                          “Hey, my name is <b>Phyllis</b> and I am enthusiastic about
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
            <div className="col-12 col-lg-4">
              <div className={hoverMe}>
                <div className={`card ${card}`} >
                  <div className={cardBackground}>
                    <StaticImage
                      src="../images/team/Kathleen/kathleen_1.JPEG"
                      alt="Kathleen"
                      className={roundedCircle}
                    />
                    <div className="card-body">
                      <div className={overlay}>
                        <h5 className={text}>
                        “Hello, my name is <b>Kathleen</b> and I am  passionate about checking out
                        new tools and I love to cook all day long.”
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className={hoverMe}>
                <div className={`card ${card}`} >
                  <div className={cardBackground}>
                    <StaticImage
                      src="../images/team/Franzi/franzi_1.jpg"
                      alt="Franzi, second CEO of mindchase"
                      className={roundedCircle}
                    />
                    <div className="card-body">
                      <div className={overlay}>
                        <h5 className={text}>
                          “Hej, I am <b>Franzi</b> an out of box thinker with a
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
        <div className="row">
          <div className="col-12 col-lg-6"> <Link to="https://campus.mindchase.de/#/" className="btn btn-danger">
          Hash, hash... hey You, yes You check out our Digital Campus.
         </Link></div>
        <div className="col-12 col-lg-6 text-right" className={campusButton}>
        <Link to="https://campus.mindchase.de/#/" className="btn btn-danger">
          Hash, hash... hey You, yes You check out our Digital Campus.
         </Link>
         </div>
         
         </div>
       
      </Layout>
    </>
  );
};

export default AboutPage;

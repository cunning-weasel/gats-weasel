import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import Button from "react-bootstrap/Button";
import { overlay, hoverMe, text} from "./about.module.scss";
//import "/about.module.scss"
const AboutPage = () => {
  return (
    <>
      <Layout>
        <Seo title="About" />
        {/* class container */}
        <div className="container-md">
          <div className="row">
            <div className="col-sm col-lg-4">
              <div className={hoverMe}>
                <div className="card" style={{ width: "26rem" }}>
                  <StaticImage
                    alt="Marco, the only man on a team"
                    src="../images/team/Marco/marco.jpg"
                    className="rounded-circle"
                    layout="fixed"
                    width={410}
                    height={400}
                  />

                  <div className="card-body">
                    <div class={overlay}>
                      <h5 class={text}>Marco</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm col-lg-4">
              <div className={hoverMe}>
                <div className="card" style={{ width: "26rem" }}>
                  <StaticImage
                    alt="Karo, CEO of mindchase"
                    src="../images/team/Karo/karo.JPG"
                    className="rounded-circle"
                    layout="fixed"
                    width={410}
                    height={400}
                  />

                  <div className="card-body">
                    <div class={overlay}>
                      <h5 class={text}>Karo</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm col-lg-4">
              <div className={hoverMe}>
                <div className="card" style={{ width: "26rem" }}>
                  <StaticImage
                    alt="Phyllis"
                    src="../images/team/Phyllis/phyllis.JPG"
                    className="rounded-circle"
                    layout="fixed"
                    width={410}
                    height={400}
                  />

                  <div className="card-body">
                    <div className={overlay}>
                      <h5 class={text}>Phyllis</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm col-lg-6">
              <div className={hoverMe}>
                <div className="card" style={{ width: "26rem" }}>
                  <StaticImage
                    alt="Kathleen"
                    src="../images/team/Kathleen/kathleen.JPEG"
                    className="rounded-circle"
                    layout="fixed"
                    width={400}
                    height={410}
                  />
                  <div className="card-body">
                    <div className={overlay}>
                      <h5 class={text}>Kathleen</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm col-lg-6">
              <div className={hoverMe}>
                <div className="card" style={{ width: "26rem" }}>
                  <StaticImage
                    alt="Franzi, second CEO of mindchase"
                    src="../images/team/Franzi/franzi.jpg"
                    className="rounded-circle"
                    layout="fixed"
                    width={410}
                    height={400}
                  />

                  <div className="card-body">
                    <div className={overlay}>
                      <h5 class={text}>Franzi</h5>
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

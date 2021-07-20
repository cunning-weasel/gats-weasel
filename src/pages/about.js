import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// markup
const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <div className="container">
        <div className="row">
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <div className="col">
                <StaticImage
                  alt="Marco, the only man on a team"
                  src="../images/team/Marco/marco.jpg"
                  layout="fixed"
                  width={300}
                  height={300}
                />
              </div>
              <Card.Body>
                <Card.Title>Marco</Card.Title>
                <Card.Text>Marco, the only man on a team</Card.Text>
                <Button variant="primary">More about Marco...</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <StaticImage
                alt="Karo, CEO of mindchase"
                src="../images/team/Karo/karo.JPG"
                layout="fixed"
                width={300}
                height={300}
              />

              <Card.Body>
                <Card.Title>Karo</Card.Title>
                <Card.Text>Karo, CEO of mindchase</Card.Text>
                <Button variant="primary">More about Karo...</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <StaticImage
                alt="Phyllis"
                src="../images/team/Phyllis/phyllis.JPG"
                layout="fixed"
                width={300}
                height={400}
              />

              <Card.Body>
                <Card.Title>Phyllis</Card.Title>
                <Card.Text>Phyllis</Card.Text>
                <Button variant="primary">More about Phyllis...</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <StaticImage
                alt="Kathleen"
                src="../images/team/Kathleen/kathleen.JPEG"
                layout="fixed"
                width={300}
                height={300}
              />

              <Card.Body>
                <Card.Title>Kathleen</Card.Title>
                <Card.Text>Kathleen</Card.Text>
                <Button variant="primary">More about Kathleen...</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <StaticImage
                alt="Franzi, second CEO of mindchase"
                src="../images/team/Franzi/franzi.jpg"
                layout="fixed"
                width={300}
                height={300}
              />

              <Card.Body>
                <Card.Title>Franzi</Card.Title>
                <Card.Text>Franzi, second CEO of mindchase</Card.Text>
                <Button variant="primary">
                    More about Franzi...
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "bootstrap/dist/css/bootstrap.min.css";
//import '../components/Style.scss';
import Layout from "../components/Layout";
import Seo from "../components/seo";

function Workshops() {
  return (
    <Layout>
      <Seo title="Workshops" />
      <div className="container">
        <div className="row">

        <div className="card m-3 bg-warning col">
            <StaticImage
              className="image-workshops"
              alt="workshps 1"
              src="../images/workshops/empowerment/empowerment.jpg"
              layout="fixed"
              width={300}
              height={200}
            />
            <h2>Empowerment</h2>

            <div className="card-body">
              <p className="card-text">
                What if you are finally empowered to know what you want and you
                go to bed and know that you take the right decisions and actions
                to reach it.
              </p>
              <a href="#" class="card-link">
                read more
              </a>
            </div>
          </div>

          <div className="card m-3 bg-warning col">
            <StaticImage
              className="image-workshops"
              alt="A woman presenting the topic for a client during a business meeting."
              src="../images/workshops/presentation_skills/presentation_skills.jpg"
              layout="fixed"
              width={300}
              height={200}
            />
            <h2>Presentation skills</h2>

            <div className="card-body">
              <p className="card-text">
                What if you are standing in a crowd o people and everyone is
                eagerly listening to your every word
              </p>
            </div>
            <a href="#" class="card-link">
              read more
            </a>
          </div>

          <div className="card m-3 bg-warning col">
            <StaticImage
              className="image-workshops"
              alt="A little boy sitting in a box, pretending to be an astronaut in a spcerocket, ready to fly."
              src="../images/workshops/motivation/motivation.jpg"
              layout="fixed"
              width={300}
              height={200}
            />
            <h2>Motivation</h2>

            <div className="card-body">
              <p className="card-text">
                Wouldnt it be great to know exactly what drives you most and
                helps you to channel your strengths and achieve your goal
                easily?.
              </p>
            </div>
            <a href="#" class="card-link">
              read more
            </a>
          </div>
        </div>

        <div className="row">
          <div className="card m-3 bg-warning col">
            <StaticImage
              className="image-workshops"
              alt="A smiling man stands in front of a wall on which strong arms are painted. It is a symbolically depicted power that lies  dormant in it."
              src="../images/workshops/self_confidence/self_confidence.jpg"
              layout="fixed"
              width={300}
              height={200}
            />
            <h2>Self-confidence</h2>
            <div className="card-body">
              <p className="card-text">
                Wouldn't it be great to be self-confident and to rely on your
                personal strengths, while knowing and improving your weaknesses?
                Wouldn't it be great to believe in yourself without worrying
                about others to much?
              </p>
            </div>
            <a href="#" class="card-link">
              read more
            </a>
          </div>

          <div className="card m-3 bg-warning col">
            <StaticImage
              className="image-workshops"
              alt="Alarm clock between the palms and the darnkes arround."
              src="../images/workshops/time_management/time_management3.jpg"
              layout="fixed"
              width={300}
              height={200}
            />
            <h2>Time Management</h2>
            <div className="card-body">
              <p className="card-text">
                You never have enough time and every day is just to short to get
                things done? What if you learn how to structure your day, how to
                prioritize your tasks and still have enough time for your
                friends, family and hobbies?
              </p>
            </div>
            <a href="#" class="card-link">
              read more
            </a>
          </div>

          <div className="card m-3 bg-warning col">
            <StaticImage
              className="image-workshops"
              alt="A woman leaning against a wall, savoring the rays of the sun."
              src="../images/workshops/stress_management/stress_management.jpg"
              layout="fixed"
              width={300}
              height={200}
            />
            <h2>Stress Management</h2>
            <div className="card-body">
              <p className="card-text">What if.. </p>
            </div>
            <a href="#" class="card-link">
              read more
            </a>
          </div>
        </div>

        <div>
          <p>
            you can see all of our shop add more details in our little Camp
            under this link{" "}
          </p>
          <a href="#" class="card-link">
            Digital campus
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Workshops;

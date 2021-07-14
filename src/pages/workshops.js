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
          <div className="col">
            <div className="card">
              <StaticImage
                className="image-workshops"
                alt="A woman wearing a Superman outfit is pointing at You."
                src="../images/workshops/empowerment/empowerment.jpg"
                layout="fixed"
                width={300}
                height={200}
              />
              <h2>Empowerment</h2>

              <div className="card-body">
                <p className="card-text">
                <h5>What if You are finally empowered to know what You want? How will You feel going to bed knowing that You take the right decisions and actions to reach it? </h5>
                  <p>In this workshop You will learn how to:</p>
                  <ul>
                    <li>analyze the status quo of our wishes and needs</li>
                    <li>recall positive experiences and strengthen yourself</li>
                    <li>discover your own values</li>
                    <li>set the right goals with the SMART method</li>
                    <li>find our your role in personal and professional life</li>
                    <li>discover methods how to get started and take actions</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
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
                <h5>What if You are standing in a crowd of people and everyone is eagerly listening to your every word?</h5>
                  <p>In this workshop You will learn how to:</p>
                  <ul>
                    <li>find your story (-line)</li>
                    <li>get just enough self-confidence to impress your audience</li>
                    <li>hook your audience right at the beginning</li>
                    <li>sell boring facts</li>
                    <li>be remembered in the end</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
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
                <h5>Wouldn't it be great to know exactly what drives you most and helps you to channel your strengths to achieve your goal easily?</h5>
                  <p>In this workshop You will learn how to:</p>
                  <ul>
                    <li>understand the psychology of motivation</li>
                    <li>identify elements of enjoyment</li>
                    <li>find your own best motives</li>
                    <li>set your goals and find a path by eliminating bad habits and focusing on good motivation factors</li>
                    <li>shape your mindset to implement it in the "day-to-day" routines</li>
                    <li>stay on track</li>
                    <li>celebrate your success</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card">
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
                <h5>Wouldn't it be great to be self-confident and to rely on your personal strengths, while knowing and improving your weaknesses? Wouldn't it be great to believe in yourself without worrying about others to much?</h5>
                  <p>In this workshop You will learn how to:</p>
                  <ul>
                    <li>analyze your current standpoint</li>
                    <li>set your personal and professional goals</li>
                    <li>understand the effects of your past experiences on your self-confidence</li>
                    <li>eliminate "the negative" in your life, while strengthening "the positive"</li>
                    <li>continuously improve your self-esteem and self-confidence</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <StaticImage
                className="image-workshops"
                alt="Alarm clock between the palms and the darnkess arround."
                src="../images/workshops/time_management/time_management3.jpg"
                layout="fixed"
                width={300}
                height={200}
              />
              <h2>Time Management</h2>
              <div className="card-body">
                <p className="card-text">
                  <h5>You never have enough time and every day is just to short to get things done? What if you learn how to structure your day, how to prioritize your tasks and still have enough time for your friends, family and hobbies?</h5>
                  <p>In this workshop You will learn how to:</p>
                  <ul>
                    <li>analyze your personal and professional goals and tasks</li>
                    <li>prioritize your tasks</li>
                    <li>identificate and eliminate the efficiency reducing activities</li>
                    <li>say: -"NO."</li>
                    <li>start creating "not-to-do-lists"</li>
                    <li>get familar with simple techniques to structure and prioritize your tasks</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
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
                <p className="card-text">
                  <h5>What if… You can finally breathe deeply?</h5>
                  In this workshop You will learn how to:
                  <ul>
                    <li>identify stressors in your daily life and analyze your personal stress level</li>
                    <li>manage and release stress with simple tricks</li>
                    <li>understand the importance of mindfulness and rituals</li>
                    <li>change and trust yourself</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Workshops;

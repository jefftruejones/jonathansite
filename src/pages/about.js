import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import "./about.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className="aboutContent">
        <div className="aboutItem aboutItemSm">
          <StaticImage src="../images/jonathan.jpg" className="aboutImage" />
        </div>
        <div className="aboutItem">
          <h2>Jonathan Groger, Licensed Massage Therapist</h2>
          <p>
            Jonathan enjoys working with the therapeutic aspects of massage and
            specializes in a combination of trigger point, deep tissue, and
            myofacial techniques.
          </p>{" "}
          <p>
            They believe that our physical and emotional systems are deeply
            intertwined, and honor this connection by intentionally creating
            space geared towards each individual's specific needs and goals.
          </p>{" "}
          <p>
            Jonathan is also passionate about weight training and puzzles, as
            they like to find order amongst chaos.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

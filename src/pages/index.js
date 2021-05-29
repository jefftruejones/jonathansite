import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
//import { StaticImage } from "gatsby-plugin-image";
import { FaCalendarCheck } from "@react-icons/all-files/fa/FaCalendarCheck";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FaBuilding } from "@react-icons/all-files/fa/FaBuilding";
import "./index.css";

const IndexPage = () => {
  return (
    <Layout>
      <div className="jumbo">
        <div className="callToAction">
          <p>Some Words About Health and Healing</p>
          <p>Secondary Thoughts</p>
          <button type="button" className="requestApp">
            <Link to={"/contact"} className="buttonLink">
              Request an Appointment
            </Link>
          </button>
        </div>
      </div>
      <div className="homeContent">
        <div>
          <p class="icon">
            <FaCalendarCheck />
          </p>
          <p>
            Flexible{" "}
            <Link to="/contact" className="linkText">
              Scheduling
            </Link>
          </p>
        </div>
        <div>
          <p class="icon">
            <FaHandshake />
          </p>
          <p>
            Wide Variety of{" "}
            <Link to="/services" className="linkText">
              Services
            </Link>
          </p>
        </div>
        <div>
          <p class="icon">
            <FaBuilding />
          </p>
          <p>
            House Calls or Service onSite at{" "}
            <a
              href="https://www.acupuncturehealingcenter.org/"
              className="linkText"
            >
              Acupuncture Healing Center
            </a>
          </p>
        </div>
      </div>
      <div className="testimonials">
        <h2>Testimonials</h2>
        <div className="homeContent">
          <div>
            <p class="text">
              Jonathan is literally the best in the history of the world!
            </p>
            <p>-Happy Customer</p>
          </div>
          <div>
            <p class="text">
              Jonathan helped tremendously with my TMJ pain and postural issues!
            </p>
            <p>-Jeff J</p>
          </div>
          <div>
            <p class="text">
              Jonathan is literally the best in the history of the world!
            </p>
            <p>-Happy Customer</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

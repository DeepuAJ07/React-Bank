import React from "react";
import "./About.css";
import { Helmet } from "react-helmet";
import Home2 from "./Home2";
function About() {
  return (
    <div>
      <Helmet>
        <title>Bank-About</title>
      </Helmet>
      <Home2/>
      <div class="AboutPage">

      <h1>About Us</h1>
      <p>
        At <strong>Bank Name</strong>, we are committed to providing exceptional banking services to our customers.
        With a history spanning over <strong>[number of years]</strong> years, we have established ourselves as a trusted
        financial institution in the industry. Our bank is built on the principles of integrity, innovation, and
        customer satisfaction.
      </p>
      <p>
        Our mission is to empower individuals, businesses, and communities by offering a comprehensive range of financial
        solutions. We aim to be the preferred choice for our customers, providing them with personalized service,
        advanced technology, and competitive products.
      </p>
    </div>
    </div>
    )
    }

export default About;

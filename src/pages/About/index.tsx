import React from "react";

// Assets
import about_img from "~/assets/img-about-us.png";

// Styles
import { Container } from "./styles";

const About = () => (
  <Container id="about">
    <img src={about_img} alt="" />
    <div>
      <h2>About us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  </Container>
);

export default About;

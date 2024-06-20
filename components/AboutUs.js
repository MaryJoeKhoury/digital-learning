import React from "react";
import SectionTitle from "./SectionTitle";

const AboutUs = (props) => {
  return (
    <div class="about-us alignement" id="about-us">
      <SectionTitle title="About this digital learning platform" />
      <div class="flex flex-row flex-wrap justify-between mt-8 align-middle ">
        <p class="text-justify text-xl">{props.aboutDescription}</p>
        <div class="about-us__image">
          <img src={props.aboutImage} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

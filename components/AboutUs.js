import React from "react";
import SectionTitle from "./SectionTitle";

const AboutUs = (props) => {
  return (
    <div className="max-w-7xl m-auto" id="about-us">
      <SectionTitle title="About this digital learning platform" />
      <div class="flex flex-row flex-wrap justify-between mt-8 align-middle ">
        <p class="text-justify text-xl w-2/5 mr-0.5">
          {props.aboutDescription}
        </p>
        <div class="w-1/2">
          <img src={props.aboutImage} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

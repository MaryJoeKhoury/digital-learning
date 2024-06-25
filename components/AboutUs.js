import React from "react";
import SectionTitle from "./SectionTitle";

const AboutUs = (props) => {
  return (
    <div
      className=" alignement sm-alignement  xl:max-w-7xl m-auto "
      id="about-us"
    >
      <SectionTitle title="About this digital learning platform" />
      <div class="flex flex-row flex-wrap   justify-between cards mt-8 align-middle items-center">
        <p class="text-justify text-xl flexgrowsm xl:w-2/5 desc group:w-1/2 mr-0.5">
          {props.aboutDescription}
        </p>
        <div class="w-1/2 flexgrowsm">
          <img src={props.aboutImage} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

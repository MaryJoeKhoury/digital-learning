import React from "react";
import SectionTitle from "./SectionTitle";

const AboutUs = (props) => {
  return (
    <div className="alignement sm-alignement alignementxs m-auto sm:px-12 md:px-0 lg:max-w-7xl lg:px-12 xl:px-3">
      <SectionTitle
        title="About this digital learning platform"
        id="about-us"
      />
      <div className="cards mt-8 flex flex-row flex-wrap items-center justify-between align-middle">
        <p className="flexgrowsm desc group:w-1/2 mb-5 mr-0.5 text-justify text-xl xl:w-2/5">
          {props.aboutDescription}
        </p>
        <div className="flexgrowimg w-1/2">
          <img src={props.aboutImage} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

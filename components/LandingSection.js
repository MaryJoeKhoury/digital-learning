import React from "react";

const LandingSection = (props) => {
  return (
    // <div className={` bg-[${props.bgColor}] flex-wrap`}>
    <div className="flex-wrap bg-[#fdd5b5]">
      <div className="m-alignement alignement m-auto flex flex-col items-center pt-24 sm:px-12 md:flex-row md:px-0 lg:max-w-7xl lg:px-12 xl:max-w-7xl xl:px-3">
        <div className="w-full flex-grow md:w-1/2">
          <h1 className="text-5xl font-bold md:w-1/2">{props.text}</h1>
        </div>
        <div className="md:w-1/2">
          <img src={props.image} />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;

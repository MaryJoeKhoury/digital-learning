import React from "react";
import AlignContainer from "./AlignContainer";

const LandingSection = (props) => {
  return (
    // <div className={` bg-[${props.bgColor}] flex-wrap`}>
    <div className="flex-wrap bg-[#fdd5b5]">
      <AlignContainer>
        <div className="flex flex-col items-center pt-24 sm:px-12 md:flex-row">
          <div className="w-full flex-grow md:w-1/2">
            <h1 className="text-4xl font-bold sm:text-5xl md:w-1/2">
              {props.text}
            </h1>
          </div>
          <div className="md:w-1/2">
            <img src={props.image} />
          </div>
        </div>
      </AlignContainer>
    </div>
  );
};

export default LandingSection;

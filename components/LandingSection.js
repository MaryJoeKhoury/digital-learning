import React from "react";

const LandingSection = (props) => {
  return (
    <div className={` bg-[${props.bgColor}] flex-wrap`}>
      <div className="m-alignement alignement m-auto flex flex-row items-center pt-16 xl:max-w-7xl">
        <div className="w-1/2 flex-grow">
          <h1 className="w-1/2 font-bold lg:text-5xl">{props.text}</h1>
        </div>
        <div className="w-1/2">
          <img src={props.image} />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;

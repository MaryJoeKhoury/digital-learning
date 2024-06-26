import React from "react";

const Features = (props) => {
  return (
    <>
      <img src={props.icon} className="w-40" />
      <div className="w-[30%] py-3">
        <p className="text-2xl font-bold">{props.title}</p>
        <h5 className="text-justify">{props.description}</h5>
      </div>
    </>
  );
};

export default Features;

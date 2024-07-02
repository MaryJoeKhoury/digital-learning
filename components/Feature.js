import React from "react";

import Features from "./Features";
import SeeMore from "./SeeMore";

const Feature = (props) => {
  return (
    <Features>
      <img src={props.icon} className="w-40" />
      <div className="mt-6">
        <p className="text-2xl font-bold">{props.title}</p>
        <h5 className="text-justify">{props.description}</h5>
        <SeeMore link={props.link} />
      </div>
    </Features>
  );
};

export default Feature;

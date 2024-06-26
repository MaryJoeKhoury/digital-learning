import React from "react";

import Features from "./Features";

const Feature = (props) => {
  return (
    <Features>
      <img src={props.icon} className="w-40" />
      <div className="mt-6">
        <p className="text-2xl font-bold">{props.title}</p>
        <h5 className="text-justify">{props.description}</h5>
      </div>
    </Features>
  );
};

export default Feature;

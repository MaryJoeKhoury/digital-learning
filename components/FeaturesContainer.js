import React from "react";
import SectionTitle from "./SectionTitle";

const FeaturesContainer = (props) => {
  return (
    <div className="alignement alignementxs m-auto xl:max-w-7xl">
      <SectionTitle title="Explore the world with us" />
      <div className="flex flex-row flex-wrap gap-2">{props.children}</div>
    </div>
  );
};

export default FeaturesContainer;

import React from "react";
import SectionTitle from "./SectionTitle";

const CardContainer = (props) => {
  return (
    <div
      className="alignement alignementxs m-auto xl:max-w-7xl"
      id="pricing-cards"
    >
      <SectionTitle title="Princing Cards" />
      <div className="cards mt-4 flex flex-row flex-wrap align-middle lg:justify-between">
        {props.children}
      </div>
    </div>
  );
};

export default CardContainer;

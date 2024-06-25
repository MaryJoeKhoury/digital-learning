import React from "react";
import SectionTitle from "./SectionTitle";

const CardContainer = (props) => {
  return (
    <div className=" alignement xl:max-w-7xl m-auto " id="pricing-cards">
      <SectionTitle title="Princing Cards" />
      <div className="flex align-middle flex-row cards  xl:justify-between flex-wrap mt-4">
        {props.children}
      </div>
    </div>
  );
};

export default CardContainer;

import React from "react";
import SectionTitle from "./SectionTitle";

const CardContainer = (props) => {
  return (
    <div className="max-w-7xl m-auto">
      <SectionTitle title="Princing Cards" />
      <div className="flex align-middle flex-row justify-between flex-wrap mt-4">
        {props.children}
      </div>
    </div>
  );
};

export default CardContainer;

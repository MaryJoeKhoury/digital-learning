import React from "react";
import SectionTitle from "./SectionTitle";

const CardContainer = (props) => {
  return (
    <div>
      <SectionTitle title="Princing Cards" />
      {props.children}
    </div>
  );
};

export default CardContainer;

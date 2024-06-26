import React from "react";
import SectionTitle from "./SectionTitle";

const CardContainer = (props) => {
  return (
    <div className="alignement alignementxs xs:px-12 m-auto sm:px-12 md:px-0 lg:px-12 xl:max-w-7xl xl:px-3">
      <SectionTitle title={props.title} />
      <div className="cards mt-4 flex flex-row flex-wrap gap-2 align-middle lg:justify-between">
        {props.children}
      </div>
    </div>
  );
};

export default CardContainer;

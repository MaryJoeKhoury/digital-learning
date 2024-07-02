import React from "react";
import AlignContainer from "./AlignContainer";

const Accordion = (props) => {
  return (
    <AlignContainer>
      <button className="w-full bg-[#f4e9e0] px-4 py-8 text-left text-2xl font-bold">
        {props.title}
      </button>
      <div className="bg-red-50 py-8">
        <p className="">{props.details}</p>
      </div>
    </AlignContainer>
  );
};

export default Accordion;

import React from "react";
import AlignContainer from "./AlignContainer";

const Accordion = (props) => {
  return (
    <AlignContainer>
      <div className="overflow-hidden">
        <button
          onClick={props.onClick}
          className={` ${props.isOpen ? "bg-[#f4dcc8] font-bold" : ""} flex w-full flex-row items-center justify-between bg-[#f4e9e0] px-4 py-8 text-left text-2xl outline-none`}
        >
          <p>{props.title}</p>

          <img
            src="/icons/down-arrow.svg"
            className={`w-6 transition-transform duration-700 ease-in-out ${props.isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <div className={`${props.isOpen ? "h-full" : "h-0"} `}>
          <p className={`bg-red-50 px-4 py-8 text-xl`}>{props.details}</p>
        </div>
      </div>
    </AlignContainer>
  );
};

export default Accordion;

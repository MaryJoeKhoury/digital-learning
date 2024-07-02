import React from "react";
import SectionTitle from "./SectionTitle";
import AlignContainer from "./AlignContainer";
import { handleProfession } from "@/pages/about";

const CardContainer = (props) => {
  // if (props.id === "teachers")
  //   return (
  //     <AlignContainer>
  //       <SectionTitle title={props.title} id={props.id} />
  //       <select
  //         name="cars"
  //         id="cars"
  //         onClick={handleProfession}
  //         className="rounded-xl bg-[#ffefe2] px-4 py-2 outline-none"
  //       >
  //         <option value="all">All</option>
  //         <option value="software engineer">Software Engineer</option>
  //         <option value="graphic designer">Graphic Designer</option>
  //         <option value="english teacher">English Teacher</option>
  //       </select>
  //       <div className="cards mt-4 flex flex-row flex-wrap gap-2 align-middle lg:justify-between">
  //         {props.children}
  //       </div>
  //     </AlignContainer>
  //   );

  return (
    <AlignContainer>
      <SectionTitle title={props.title} id={props.id} />
      {/* <div className="cards mt-4 flex flex-row flex-wrap gap-2 align-middle lg:justify-between">
        {props.children}
      </div> */}
      <div
        className={
          props.className ||
          "cards mt-4 flex flex-row flex-wrap gap-2 align-middle lg:justify-between"
        }
      >
        {props.children}
      </div>
    </AlignContainer>
  );
};

export default CardContainer;

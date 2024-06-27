import React from "react";

const PeopleCards = (props) => {
  return (
    <div className="flexgrow group mb-8 mt-12 flex w-96 flex-col items-center justify-center rounded-xl bg-[#fdd5b5] text-center hover:cursor-pointer xl:mt-4">
      {props.children}
    </div>
  );
};

export default PeopleCards;

import React from "react";

const Cards = (props) => {
  return (
    <div className="flex flex-col align-middle justify-center text-center hover:cursor-pointer mt-12 w-96 group">
      {props.children}
    </div>
  );
};

export default Cards;

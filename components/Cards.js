import React from "react";

const Cards = (props) => {
  return (
    <div className="flexgrow group mt-12 flex w-96 flex-col justify-center text-center align-middle hover:cursor-pointer">
      {props.children}
    </div>
  );
};

export default Cards;

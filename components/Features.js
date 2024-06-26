import React from "react";

const Features = (props) => {
  return (
    <div className="flexgrow group mt-12 flex w-96 flex-col items-center justify-center hover:cursor-pointer">
      {props.children}
    </div>
  );
};

export default Features;

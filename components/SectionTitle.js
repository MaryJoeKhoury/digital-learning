import React from "react";

const SectionTitle = (props) => {
  return (
    <h1 className="mt-20 text-center text-4xl" id={props.id}>
      {props.title}
    </h1>
  );
};

export default SectionTitle;

import React from "react";

const card = (props) => {
  return (
    <div>
      <div>
        <img src={props.image} />
      </div>
      <div>{props.features}</div>
      <div>{props.price}</div>
    </div>
  );
};

export default card;

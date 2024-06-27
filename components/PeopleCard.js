import React from "react";
import PeopleCards from "./PeopleCards";

const PeopleCard = (props) => {
  return (
    <PeopleCards>
      <div className="my-8 h-40 w-40 rounded-full">
        <img
          src={props.image}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <p className="mb-4 px-5 text-justify text-xl">{props.description}</p>
      </div>
    </PeopleCards>
  );
};

export default PeopleCard;

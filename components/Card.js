import React from "react";
import Cards from "./Cards";
import Button from "./Button";

const Card = (props) => {
  return (
    <Cards>
      <img
        src={props.image}
        className="w-24 translate-y-8 self-center transition-transform group-hover:translate-y-[-0.125rem] group-hover:duration-700"
      />
      <div className="rounded-2xl bg-brown-wood px-0 py-14 group-hover:shadow-brown-wood">
        <h1 className="mb-0 text-3xl text-red-700">{props.title}</h1>
        <h2 className="my-3 text-xl text-blue-950">{props.price}</h2>
        <ul>
          {props.description.map((items) => (
            <li key={items.id} className="px-12 py-3 text-lg">
              {items.text}
            </li>
          ))}
        </ul>
      </div>
      <Button text="Buy Now"></Button>
    </Cards>
  );
};

export default Card;

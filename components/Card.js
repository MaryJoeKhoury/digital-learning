import React from "react";
import Cards from "./Cards";
import Button from "./Button";

const Card = (props) => {
  return (
    <Cards>
      <img
        src={props.image}
        className="w-24 transition-transform translate-y-8 self-center group-hover:translate-y-[-0.125rem] group-hover:duration-700"
      />
      <div className="px-0 py-14 rounded-2xl bg-brown-wood group-hover:shadow-brown-wood">
        <h1 className="mb-0 text-red-700 text-3xl">{props.title}</h1>
        <h2 className="text-xl my-3 text-blue-950">{props.price}</h2>
        <ul>
          {props.description.map((items) => (
            <li key={items.id} className="text-lg px-12 py-3">
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

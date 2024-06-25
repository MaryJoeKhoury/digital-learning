import React from "react";

const Button = (props) => {
  return (
    <button className="group-hover:shadow-custom m-auto w-3/4 translate-y-[-1rem] rounded-md bg-slate-200 px-3 py-4 text-black transition-transform group-hover:translate-x-2 group-hover:rounded-2xl group-hover:bg-slate-300 group-hover:duration-700">
      {props.text}
    </button>
  );
};

export default Button;

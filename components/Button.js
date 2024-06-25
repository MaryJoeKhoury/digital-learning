import React from "react";

const Button = (props) => {
  return (
    <button className="bg-slate-200 text-black rounded-md py-4 px-3 transition-transform  translate-y-[-1rem] w-3/4 m-auto group-hover:translate-x-2 group-hover:bg-slate-300 group-hover:duration-700 group-hover:rounded-2xl group-hover:shadow-custom ">
      {props.text}
    </button>
  );
};

export default Button;

import React, { useRef } from "react";
import Button from "./Button";

const ContactInput = (props) => {
  if (props.type === "textarea")
    return (
      <textarea
        placeholder={props.placeholder}
        required
        className="m-auto my-4 h-96 w-full rounded-md border-2 border-solid border-slate-800 p-3 outline-none"
      />
    );

  return (
    <div className="w-full">
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required
        className="my-4 w-full border-b-2 border-solid border-slate-800 p-3 outline-none"
      />
    </div>
  );
};

export default ContactInput;

import React from "react";

const ContactInput = (props) => {
  if (props.type === "textarea")
    return (
      <textarea
        placeholder={props.placeholder}
        required
        className="w-full h-96 rounded-md my-4 outline-none border-slate-800 border-solid border-2 m-auto"
      />
    );

  return (
    <div className="  ">
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required
        className="w-full my-4 outline-none border-slate-800 border-solid border-b-2"
      />
    </div>
  );
};

export default ContactInput;

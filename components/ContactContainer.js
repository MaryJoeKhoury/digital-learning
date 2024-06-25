import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import ContactInfo from "./ContactInput";
import Button from "./Button";
const ContactContainer = (props) => {
  return (
    <div
      className=" sm-alignement  alignement xl:max-w-7xl m-auto "
      id="contact-us"
    >
      <SectionTitle title="Contact Us" />
      <div className="flex flex-col justify-center align-middle items-center w-full lg:justify-center">
        {props.children}
        <input
          type="submit"
          className="bg-slate-200 text-black rounded-md py-4 px-3 transition-transform w-1/2 mb-4 hover:translate-y-[-0.25rem] hover:bg-slate-300 hover:shadow-lg hover:shadow-indigo-500/30"
        />
      </div>
    </div>
  );
};

export default ContactContainer;

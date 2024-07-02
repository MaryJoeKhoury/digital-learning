import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import ContactInfo from "./ContactInput";
import Button from "./Button";
import AlignContainer from "./AlignContainer";
const ContactContainer = (props) => {
  return (
    <AlignContainer>
      <SectionTitle title="Contact Us" id="contact-us" />
      <div className="flex w-full flex-col items-center justify-center align-middle lg:justify-center">
        {props.children}
        <input
          type="submit"
          className="mb-4 w-1/2 rounded-md bg-slate-200 px-3 py-4 text-black transition-transform hover:translate-y-[-0.25rem] hover:bg-slate-300 hover:shadow-lg hover:shadow-indigo-500/30"
        />
      </div>
    </AlignContainer>
  );
};

export default ContactContainer;

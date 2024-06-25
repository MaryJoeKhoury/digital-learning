import React from "react";
import SectionTitle from "./SectionTitle";
import ContactInfo from "./ContactInput";

const ContactContainer = (props) => {
  return (
    <div className="max-w-7xl m-auto">
      <SectionTitle title="Contact Us" />
      <div className="flex flex-col justify-center align-middle">
        {props.children}
      </div>
    </div>
  );
};

export default ContactContainer;

import React from "react";
import SectionTitle from "./SectionTitle";

const ContactForm = (props) => {
  return (
    <div>
      <SectionTitle title="Contact Us" />
      <input
        type={props.inputType}
        name={props.inputName}
        placeholder={props.inputPlaceholder}
        required
      />
      <input
        type={props.inputType}
        name={props.inputName}
        placeholder={props.inputPlaceholder}
        required
      />
      <input
        type={props.inputType}
        name={props.inputName}
        placeholder={props.inputPlaceholder}
        required
      />
      <input
        type={props.inputType}
        name={props.inputName}
        placeholder={props.inputPlaceholder}
        required
      />
    </div>
  );
};

export default ContactForm;

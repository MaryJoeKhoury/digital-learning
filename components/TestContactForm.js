import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ContactInfo from "./ContactInput";
import Button from "./Button";
import AlignContainer from "./AlignContainer";
const ContactContainer = (props) => {
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (!/^\d+$/.test(phone)) {
      return setErrorMessage("Please enter a valid phone number.");
    }
    setErrorMessage("");
    alert("Successfull submit");
  };
  return (
    <AlignContainer>
      <form id="contact-us" onSubmit={onSubmit}>
        <SectionTitle title="Contact Us" />
        <div className="flex w-full flex-col items-center justify-center align-middle lg:justify-center">
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              className="my-4 w-full border-b-2 border-solid border-slate-800 p-3 outline-none"
            />
            <input
              type="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="enter you phone number"
              required
              className="my-4 w-full border-b-2 border-solid border-slate-800 p-3 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="enter your email"
              required
              className="my-4 w-full border-b-2 border-solid border-slate-800 p-3 outline-none"
            />
          </div>
          <textarea
            placeholder="leave a message"
            required
            className="m-auto my-4 h-96 w-full rounded-md border-2 border-solid border-slate-800 p-3 outline-none"
          />
          <h5 className="mb-4 text-red-500">{errorMessage}</h5>
          <input
            type="submit"
            className="mb-4 rounded-md bg-slate-200 px-7 py-4 text-black transition-transform hover:translate-y-[-0.25rem] hover:bg-slate-300 hover:shadow-lg hover:shadow-indigo-500/30"
          />
        </div>
      </form>
    </AlignContainer>
  );
};

export default ContactContainer;

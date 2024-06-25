import SectionTitle from "./SectionTitle";
import ContactInfo from "./ContactInput";
import Button from "./Button";
const ContactContainer = (props) => {
  return (
    <form
      className=" sm-alignement  alignement xl:max-w-7xl m-auto "
      id="contact-us"
    >
      <SectionTitle title="Contact Us" />
      <div className="flex flex-col justify-center align-middle items-center w-full lg:justify-center">
        <div className=" w-full ">
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
            className="w-full my-4 outline-none border-slate-800 border-solid border-b-2 p-3 "
          />
          <input
            type="phone"
            name="phone"
            placeholder="enter you phone number"
            required
            className="w-full my-4 outline-none border-slate-800 border-solid border-b-2 p-3 "
          />

          <input
            type="email"
            name="email"
            placeholder="enter your email"
            required
            className="w-full my-4 outline-none border-slate-800 border-solid border-b-2 p-3 "
          />
        </div>
        <textarea
          placeholder="leave a message"
          required
          className="w-full h-96 rounded-md my-4 outline-none border-slate-800 border-solid border-2 m-auto p-3 "
        />
        <input
          type="submit"
          className="bg-slate-200 text-black rounded-md py-4 px-3 transition-transform w-1/2 mb-4 hover:translate-y-[-0.25rem] hover:bg-slate-300 hover:shadow-lg hover:shadow-indigo-500/30"
        />
      </div>
    </form>
  );
};

export default ContactContainer;

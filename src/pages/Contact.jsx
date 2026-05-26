import React from "react";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <div className="h-screen overflow-hidden relative ">
      <h1 className="font-['Anton'] text-[5rem] absolute left-0 top-0 px-5">
        Lets <span className="text-amber-300 text-[6rem]">Work</span> Together
      </h1>
      <div className="h-[65%] w-[50%] absolute left-0 bottom-20">
        <img
          src="./perfectONe.png"
          alt=""
          className="object-cover h-full w-full"
        />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

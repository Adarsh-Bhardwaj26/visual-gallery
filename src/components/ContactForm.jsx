import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent Successfully");
      }).then(()=>{form.current.reset();})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-[450px]
      bg-zinc-900/70 backdrop-blur-xl
      p-10 rounded-[2rem]
      border border-white/10
      flex flex-col gap-5
      shadow-[0_0_40px_rgba(0,0,0,0.5)] absolute right-10 bottom-40"
    >
      <h1 className="text-4xl text-amber-300 font-['inter']">Contact Us</h1>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="bg-black/60 p-4 rounded-xl
        text-white border border-white/10
        outline-none"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="bg-black/60 p-4 rounded-xl
        text-white border border-white/10
        outline-none"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
        className="bg-black/60 p-4 rounded-xl
        text-white border border-white/10
        outline-none resize-none"
      />

      <button
        type="submit"
        className="bg-amber-300 text-black
        py-4 rounded-full font-semibold
        hover:scale-105 transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;

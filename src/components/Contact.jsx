import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("meqwpvaq");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="contact" className="my-8">
      {/* <h1 id="" className="text-left pl-6 text-3xl font-bold mt-6 pb-3">
        Contact Me
      </h1> */}
      <div className="border border-slate-700 flex mx-12 rounded-lg justify-around bg-slate-900">
        <div className="w-1/2 text-center flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-2">Need a website?</h1>
          <h2 className="text-2xl font-semibold mb-4">Drop a line here!</h2>
          <h3 className="w-2/3 text-lg">
            Whether you need a website built, or need work done on an existing
            website, I'm your guy
          </h3>
        </div>
        <div className="w-1/2">
          <form
            id="contact-form"
            action="https://formspree.io/f/meqwpvaq"
            onSubmit={handleSubmit}
            className="flex flex-col m-12 p-4 gap-y-4 border border-slate-700 rounded-lg"
          >
            <div className="flex">
              <input
                placeholder="Chris Elliot"
                type="text"
                id="name"
                name="name"
                required
                className="flex-1 rounded-md p-1 text-white text-opacity-60 bg-slate-700"
              />
            </div>
            <div className="flex">
              <input
                placeholder="stronghand@gmail.com"
                type="email"
                id="email"
                name="email"
                required
                className="flex-1 rounded-md p-1 text-white text-opacity-60 bg-slate-700"
              />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <div className="flex">
              <input
                placeholder="Build me a website!"
                type="text"
                id="subject"
                name="subject"
                required
                className="flex-1 rounded-md p-1 text-white text-opacity-60 bg-slate-700"
              />
            </div>
            <div className="flex">
              <textarea
                id="message"
                name="message"
                placeholder="I'd like a website built with: x, y, z"
                required
                className="flex-1 rounded-md p-1 text-white text-opacity-60 bg-slate-700"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              id="submit-button"
              disabled={state.submitting}
              onClick={() => setIsOpen(true)}
              className="bg-slate-700 w-full w-1/3 self-center rounded-lg py-2 hover:bg-slate-500 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("meqwpvaq");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="contact" className="lg:my-8">
      <div className="border border-slate-700 flex flex-col lg:flex-row mx-6 p-6 mb-4 lg:mx-12 rounded-lg lg:justify-around bg-gradient-to-tr from-gray-900 to-slate-800">
        <div className="lg:w-1/2 text-center flex flex-col justify-center items-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">
            Need a website?
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold mb-4">
            Drop a line here!
          </h2>
          <h3 className="lg:w-2/3 lg:text-lg">
            Whether you need a website built, or need work done on an existing
            website, I'm your guy
          </h3>
        </div>
        <div className="lg:w-1/3 my-8 lg:my-12 lg:py-8 lg:px-12 px-6 border border-slate-700 bg-gradient-to-bl from-gray-900 to-slate-800 shadow-[2px_2px_1px_1px_#000000] rounded-lg">
          <form
            id="contact-form"
            action="https://formspree.io/f/meqwpvaq"
            onSubmit={handleSubmit}
            className="flex flex-col py-4 gap-y-4 rounded-lg"
          >
            <div className="flex">
              <input
                placeholder="Chris Elliot"
                type="text"
                id="name"
                name="name"
                required
                className="flex-1 rounded-md px-4 py-2 text-white text-opacity-60 bg-slate-700"
              />
            </div>
            <div className="flex">
              <input
                placeholder="thatsmy@strong.hand"
                type="email"
                id="email"
                name="email"
                required
                className="flex-1 rounded-md px-4 py-2 text-white text-opacity-60 bg-slate-700"
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
                className="flex-1 rounded-md px-4 py-2 text-white text-opacity-60 bg-slate-700"
              />
            </div>
            <div className="flex">
              <textarea
                id="message"
                name="message"
                placeholder="I'd like a website built with: x, y, z"
                required
                className="flex-1 rounded-md px-4 py-2 text-white text-opacity-60 bg-slate-700 resize-none"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <div className="flex bg-white rounded-lg w-2/3 bg-gradient-to-tr from-customPurple to-customBlue self-center">
              <button
                type="submit"
                id="submit-button"
                disabled={state.submitting}
                onClick={() => setIsOpen(true)}
                className="bg-slate-700 w-full rounded-lg py-2 bg-slate-700 hover:bg-opacity-0 transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

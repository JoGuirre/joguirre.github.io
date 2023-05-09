import React from "react";

function Hero() {
  return (
    <div id="home" className="h-screen flex">
      <div
        id="hero-card-container"
        className="flex relative justify-between px-8 w-full mt-8 mb-20 mx-12 rounded-lg flex border border-slate-700 bg-gradient-to-tr from-gray-900 to-slate-800 transition duration-300 rounded-lg text-slate-300 overflow-hidden"
      >
        <div
          id="hero-card-container-bg-text"
          className="absolute top-0 text-slate-400 text-opacity-[2%] font-bold text-[300px]"
        >
          JA WEBDEV
        </div>
        <div
          id="left-side"
          className="flex flex-col justify-center items-center w-1/2 z-10"
        >
          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-tr from-[#ff00f7] to-[#00ccff] bg-clip-text text-transparent">
              Josh
            </span>
          </h1>
          <h2 className="text-2xl font-semibold ml-4 mb-0 hover:cursor-default hover:scale-110 hover:bg-gradient-to-br hover:from-[#ff00f7] hover:to-[#00ccff] hover:bg-clip-text hover:text-transparent transition duration-300 text-center">
            Web Developer
          </h2>
          <h3 className="text-xl font-semibold ml-4 text-center">
            <span className="hover:cursor-default hover:scale-110 hover:bg-gradient-to-br hover:from-[#ff00f7] hover:to-[#00ccff] hover:bg-clip-text hover:text-transparent transition duration-300">
              Front-End
            </span>{" "}
            |{" "}
            <span className="hover:cursor-default hover:scale-110 hover:bg-gradient-to-br hover:from-[#ff00f7] hover:to-[#00ccff] hover:bg-clip-text hover:text-transparent transition duration-300">
              Back-End
            </span>
          </h3>
        </div>
        <div
          id="right-side"
          className="flex flex-col justify-center items-center w-1/2"
        >
          <p className="p-12 mr-12 border border-slate-700 bg-gradient-to-bl from-gray-900 to-slate-800 text-center shadow-[2px_2px_1px_1px_#000000] rounded-lg text-lg font-semibold">
            Hey there! I'm Josh, a passionate web developer driven to craft
            exceptional online experiences. With a decade in sunny San Diego, my
            work is fueled by Floridian spirit, creativity, and adventure.
            <br />
            <br />
            From encountering challenges in the hospitality industry to
            discovering the power of programming, I recognized the immense
            potential technology holds. It was outside the Navy where I found my
            true passion for web development and the ability to create
            captivating websites.
            <br />
            <br />
            Now, I'm here to bring your web dreams to reality! With a deep
            understanding of design principles, attention to detail, and
            expertise in cutting-edge technologies, I'll collaborate with you to
            create an electrifying online presence. Let's embark on this
            exciting journey together and unlock the true potential of your
            online presence!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";

function Hero() {
  return (
    <div id="home" className="lg:h-screen lg:mt-0 mt-16 flex">
      <div
        id="hero-card-container"
        className="relative flex flex-col items-center justify-around lg:justify-center w-full rounded-lg border border-slate-700 bg-gradient-to-tr from-gray-900 to-slate-800 text-slate-300 overflow-hidden m-6 p-8 lg:flex-row lg:justify-between lg:px-8 lg:mt-8 mb-20 lg:mx-12 lg:transition lg:duration-300"
      >
        <div
          id="hero-card-container-bg-text"
          className="absolute text-slate-400 text-opacity-[5%] text-[150px] lg:text-opacity-[2%] font-bold lg:text-[300px] bottom-0 lg:top-0"
        >
          JA WEBDEV
        </div>
        <div
          id="left-side"
          className="flex flex-col justify-center items-center mb-6 lg:mb-0 lg:w-1/2 z-10"
        >
          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-tr from-[#ff00f7] to-[#00ccff] bg-clip-text text-transparent">
              Josh
            </span>
          </h1>
          <h2 className="text-2xl font-semibold lg:ml-4 lg:mb-0 lg:hover:cursor-default lg:hover:scale-110 lg:hover:bg-gradient-to-br lg:hover:from-[#ff00f7] lg:hover:to-[#00ccff] lg:hover:bg-clip-text lg:hover:text-transparent lg:transition lg:duration-300 lg:text-center">
            Web Developer
          </h2>
          <h3 className="text-xl font-semibold lg:ml-4 text-center">
            <span className="lg:hover:cursor-default lg:hover:scale-110 lg:hover:bg-gradient-to-br lg:hover:from-[#ff00f7] lg:hover:to-[#00ccff] lg:hover:bg-clip-text lg:hover:text-transparent lg:transition lg:duration-300">
              Front-End
            </span>{" "}
            |{" "}
            <span className="lg:hover:cursor-default lg:hover:scale-110 lg:hover:bg-gradient-to-br lg:hover:from-[#ff00f7] lg:hover:to-[#00ccff] lg:hover:bg-clip-text lg:hover:text-transparent lg:transition lg:duration-300">
              Back-End
            </span>
          </h3>
        </div>
        <div
          id="right-side"
          className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-1/2"
        >
          <p className="lg:p-12 p-4 lg:mr-12 border border-slate-700 bg-gradient-to-bl from-gray-900 to-slate-800 text-center shadow-[2px_2px_1px_1px_#000000] rounded-lg text-md font-medium lg:font-semibold">
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

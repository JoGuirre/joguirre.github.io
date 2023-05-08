import React from "react";

function Hero() {
  return (
    <div id="home" className="h-screen flex">
      <div
        id="hero-card-container"
        className="flex relative justify-between px-8 w-full mt-8 mb-20 mx-12 rounded-lg flex border border-slate-700 bg-slate-900 rounded-lg text-slate-300 overflow-hidden"
      >
        <div
          id="hero-card-container-bg-text"
          className="absolute top-0 text-slate-400 text-opacity-[5%] font-bold text-[300px]"
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
          <p className="px-8 text-center text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            beatae repellat distinctio culpa dolorem corporis voluptatem vel!
            Asperiores dolore cupiditate, tempore possimus alias esse eligendi
            repellat consequatur, doloribus molestias similique. Fuga, modi
            quasi velit, soluta hic officiis vitae nesciunt officia maiores
            excepturi debitis incidunt alias odio eveniet? At libero ab commodi!
            Vel deleniti dicta voluptates corrupti magnam earum itaque deserunt!
            Nemo consectetur enim soluta hic temporibus corrupti aperiam, neque
            consequatur cumque reprehenderit ab consequuntur voluptas officia
            vero excepturi saepe sint.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

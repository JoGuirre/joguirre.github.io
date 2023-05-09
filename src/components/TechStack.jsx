import React, { useState, useEffect, useRef } from "react";
import { techStackFileArr } from "../content/techStackFile";
import { GrNext, GrPrevious } from "react-icons/gr";

function TechStack() {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const shadowColors = {
    purple: "before:hover:shadow-[0_0_10px_2px_rgba(255,0,247,0.7)]",
    blue: "before:hover:shadow-[0_0_10px_2px_rgba(0,204,255,0.7)]",
    orange: "before:hover:shadow-[0_0_10px_2px_rgba(255,145,0,0.7)]",
  };

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }
    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }
    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);
  return (
    <div id="techstack" className="relative my-12">
      <div className="flex justify-around gap-16 items-center absolute w-full h-full">
        <button
          onClick={movePrev}
          className="h-full shadow-[1px_1px_1px_1px_#000000] bg-gradient-to-br from-customPurple from-[-50%] to-customBlue to-[150%] rounded-md border border-slate-700 w-8 flex justify-center items-center disabled:opacity-10 transition duration-300 hover:scale-105"
          disabled={isDisabled("prev")}
        >
          <GrPrevious size="1.2rem" />
          <span className="sr-only">prev</span>
        </button>
        <button
          onClick={moveNext}
          className="h-full shadow-[1px_1px_1px_1px_#000000] bg-gradient-to-tr from-customPurple from-[-50%] to-customBlue to-[150%] rounded-md border border-slate-700 w-8 flex justify-center items-center disabled:opacity-10 transition duration-300 hover:scale-105"
          disabled={isDisabled("next")}
        >
          <GrNext size="1.2rem" />
          <span className="sr-only">next</span>
        </button>
      </div>
      <div className="mx-96 flex relative overflow-hidden">
        <div
          ref={carousel}
          className="carousel-container relative px-4 h-24 flex items-center gap-2 overflow-hidden scroll-smooth z-0"
        >
          {techStackFileArr.map((tech, index) => {
            return (
              <div
                key={index}
                className="carousel-item flex flex-col items-center justify-center hover:scale-110 hover:shadow-[0_0_1px_1px_#8fe9ff] transition duration-300 text-center relative border border-slate-700 h-20 bg-slate-900 bg-opacity-0 hover:opacity-100 hover:bg-opacity-100 rounded-lg snap-start"
              >
                <a
                  href={tech.link}
                  target="_blank"
                  className="h-full w-full aspect-square block flex flex-col justify-around items-center z-0"
                >
                  <tech.componentName
                    size="2rem"
                    color={tech.color}
                    className=""
                  />
                  <h3 className="text-white text-xs">{tech.name}</h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TechStack;

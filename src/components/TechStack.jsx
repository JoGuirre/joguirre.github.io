import React, { useState, useEffect, useRef } from "react";
import { techStackFileArr } from "../content/techStackFile";
import { GrNext, GrPrevious } from "react-icons/gr";

function TechStack() {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1 / 3);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1 / 3);
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
          className="h-full bg-gradient-to-t from-customPurple to-customBlue rounded-md border border-slate-700 w-8 flex justify-center items-center disabled:opacity-0 transition duration-300"
          disabled={isDisabled("prev")}
        >
          <GrPrevious />
          <span className="sr-only">prev</span>
        </button>
        <button
          onClick={moveNext}
          className="h-full bg-gradient-to-b from-customPurple to-customBlue rounded-md border border-slate-700 w-8 flex justify-center items-center disabled:opacity-0 transition duration-300"
          disabled={isDisabled("next")}
        >
          <GrNext />
          <span className="sr-only">next</span>
        </button>
      </div>
      <div className="mx-96 flex relative overflow-hidden">
        <div
          ref={carousel}
          className="carousel-container relative flex gap-2 overflow-hidden scroll-smooth z-0"
        >
          {techStackFileArr.map((tech, index) => {
            return (
              <div
                key={index}
                className="carousel-item flex flex-col items-center justify-center text-center relative border border-slate-700 w-64 h-20 bg-slate-900 rounded-lg snap-start"
              >
                <div className="h-full w-full aspect-square block flex flex-col justify-around items-center z-0">
                  <tech.componentName
                    size="2rem"
                    color={tech.color}
                    className=""
                  />
                  <h3 className="text-white text-xs">{tech.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TechStack;

import React from "react";
import { aboutContent } from "../content/aboutContent";

function ThreeCard() {
  return (
    <div id="about" className="flex justify-center mb-4 mx-12 gap-12">
      {aboutContent.map((section) => {
        return (
          <Card
            title={section.title}
            content={section.content}
            color={section.color}
          />
        );
      })}
    </div>
  );
}

function Card({ title, content, color }) {
  const textColors = {
    purple: "text-[#ff00f7]",
    blue: "text-[#00ccff]",
    orange: "text-[#ff9100]",
  };

  const shadowColors = {
    purple: "before:hover:shadow-[0_0_10px_2px_rgba(255,0,247,0.7)]",
    blue: "before:hover:shadow-[0_0_10px_2px_rgba(0,204,255,0.7)]",
    orange: "before:hover:shadow-[0_0_10px_2px_rgba(255,145,0,0.7)]",
  };

  const gradientColors = {
    purple: "via-[#ff00f7]",
    blue: "via-[#00ccff]",
    orange: "via-[#ff9100]",
  };
  return (
    <div className="relative flex flex-col flex-1 group hover:scale-110 transition duration-300">
      <div
        id="card-container"
        className={`relative p-4 flex flex-1 flex-col items-center border border-slate-700 rounded-lg bg-slate-900 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[-99] before:hover:z-[0] before:rounded-lg before:transition before:duration-300 ${shadowColors[color]}`}
      >
        <div id="card-title-container" className="mb-2">
          <h1
            className={`${textColors[color]} text-opacity-60 group-hover:text-opacity-100 transition duration-300 text-xl font-semibold`}
          >
            {title}
          </h1>
          <div className="relative">
            <div
              className={`absolute inset-0 mt-1 self-center w-full h-[1px] bg-gradient-to-r from-transparent ${gradientColors[color]} to-transparent opacity-0 transition duration-300 group-hover:opacity-100`}
            >
              &nbsp;
            </div>
          </div>
        </div>
        <div id="card-content-container">
          <p className="text-md text-slate-300 text-opacity-60 group-hover:text-opacity-100 transition duration-300 px-4 text-center">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThreeCard;

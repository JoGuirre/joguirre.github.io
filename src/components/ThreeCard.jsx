import React from "react";

function ThreeCard() {
  return (
    <div
      id="threecard-container"
      className="flex justify-center my-4 mx-12 gap-12"
    >
      <Card
        title="Passion for Web"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        color="purple"
      />
      <Card
        title="Adaptive"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        color="blue"
      />
      <Card
        title="Quality"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        color="orange"
      />
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
    purple: "before:hover:shadow-[0_0_50px_10px_#ff00f7]",
    blue: "before:hover:shadow-[0_0_50px_10px_#00ccff]",
    orange: "before:hover:shadow-[0_0_50px_10px_#ff9100]",
  };

  const gradientColors = {
    purple: "via-[#ff00f7]",
    blue: "via-[#00ccff]",
    orange: "via-[#ff9100]",
  };
  return (
    <div className="relative flex flex-col flex-1 group">
      <div
        id="card-container"
        className={`relative p-4 flex flex-1 flex-col items-center border border-slate-700 rounded-lg bg-slate-900 before:absolute before:w-full before:h-2/3 before:z-[-99] before:border before:rounded-lg before:transition before:duration-300 ${shadowColors[color]}`}
      >
        <div id="card-title-container" className="mb-2">
          <h1
            className={`${textColors[color]} text-opacity-60 group-hover:text-opacity-100 transition duration-300 text-xl font-semibold`}
          >
            {title}
          </h1>
        </div>
        <div id="card-content-container">
          <p className="text-md text-slate-300 text-opacity-60 group-hover:text-opacity-100 transition duration-300 px-4 text-center">
            {content}
          </p>
        </div>
      </div>
      <div className="relative">
        <div
          className={`absolute inset-0 self-center mt-2 w-full h-[1px] bg-gradient-to-r from-transparent ${gradientColors[color]} to-transparent opacity-0 transition duration-300 group-hover:opacity-100`}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
}

export default ThreeCard;

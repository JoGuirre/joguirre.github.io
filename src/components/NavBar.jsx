import React from "react";

function NavBar() {
  return (
    <div
      id="navbar-container"
      className=" z-50 sticky top-0 flex justify-center"
    >
      <div className="flex w-full px-4 h-12 justify-between bg-black border-b border-slate-700">
        <div className="pl-40 flex">
          <SocialLinks />
        </div>
        <div className="pr-40 flex">
          <NavBarList />
        </div>
      </div>
    </div>
  );
}

function NavBarList() {
  const navBarListItems = ["home", "about", "contact"];
  return (
    <ul className="flex gap-4">
      {navBarListItems.map((item) => {
        return (
          <li className="text-white rounded-lg p-2 text-center m-1 hover:cursor-pointer hover:bg-gray-600">
            <a href={`#${item}`}>{item}</a>
          </li>
        );
      })}
    </ul>
  );
}

function SocialLinks() {
  const socialLinksItems = ["github", "linkedin"];
  return (
    <ul className="flex gap-4">
      {socialLinksItems.map((item) => {
        return (
          <li className="text-white rounded-lg p-2 text-center m-1 hover:cursor-pointer hover:bg-gray-600">
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default NavBar;

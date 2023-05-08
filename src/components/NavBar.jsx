import React from "react";

function NavBar() {
  return (
    <div
      id="navbar-container"
      className=" z-50 sticky top-0 flex justify-center text-white text-opacity-40 hover:text-opacity-100 transition duration-150"
    >
      <div className="flex w-full px-4 h-12 justify-between bg-black border-b border-slate-700">
        <div className="pl-40 flex">
          <SocialLinks />
        </div>
        <div className="px-40 flex group">
          <MyLogo />
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
          <li className="rounded-lg p-2 text-center m-1 hover:cursor-pointer hover:bg-gray-600">
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
          <li className="rounded-lg p-2 text-center m-1 hover:cursor-pointer hover:bg-gray-600">
            {item}
          </li>
        );
      })}
    </ul>
  );
}

function MyLogo() {
  return (
    <div>
      <h1 className="rounded-lg p-2 font-bold text-center m-1 hover:cursor-default group-hover:scale-[150%] transition duration-150">
        JA WebDev
      </h1>
    </div>
  );
}

export default NavBar;

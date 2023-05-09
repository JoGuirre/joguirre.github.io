import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import PropTypes from "prop-types";

function NavBar() {
  const socialLinksItems = [
    { name: "github", icon: BsGithub, link: "https://github.com/JoGuirre" },
    {
      name: "linkedin",
      icon: BsLinkedin,
      link: "https://www.linkedin.com/in/joshuacaguirre/",
    },
  ];
  return (
    <div
      id="navbar-container"
      className=" z-50 sticky top-0 flex justify-center text-white text-opacity-40 hover:text-opacity-100 transition duration-150"
    >
      <div className="flex w-full h-12 justify-between bg-black relative group">
        <div className="absolute bg-gradient-to-r from-transparent via-customBlue to-transparent opacity-60 group-hover:opacity-100 transition duration-300 bottom-0 h-[1px] w-full">
          &nbsp;
        </div>
        <div className="pl-40 flex">
          <ul className="flex gap-4">
            {socialLinksItems.map((item) => {
              return (
                <SocialLinks
                  name={item.name}
                  Icon={item.icon}
                  link={item.link}
                />
              );
            })}
          </ul>
        </div>
        <div className="flex group">
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
          <li className="rounded-lg p-2 text-center m-1 hover:cursor-pointer hover:bg-gray-600 transition duration-200">
            <a href={`#${item}`}>{item}</a>
          </li>
        );
      })}
    </ul>
  );
}

function SocialLinks({ name, Icon, link }) {
  return (
    <li className="rounded-lg p-2 text-center m-1 hover:cursor-pointer hover:bg-gray-600 transition duration-200">
      <a href={link} target="_blank" className="flex items-center gap-x-2">
        <div>
          <Icon size="1.1rem" />
        </div>
        <div>{name}</div>
      </a>
    </li>
  );
}

function MyLogo() {
  return (
    <div>
      <h1 className="rounded-lg p-2 font-bold text-center m-1 hover:cursor-default group-hover:scale-[150%] transition duration-100">
        JA WebDev
      </h1>
    </div>
  );
}

SocialLinks.propTypes = {
  Icon: PropTypes.element,
};
export default NavBar;

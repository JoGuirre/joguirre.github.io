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
      className="z-50 sticky top-0 flex justify-center text-slate-300 lg:text-white lg:text-opacity-40 lg:hover:text-opacity-100 lg:transition lg:duration-150"
    >
      <div className="flex w-full h-16 lg:h-12 justify-between px-2 lg:px-0 items-center bg-black relative lg:group">
        <div className="absolute bg-gradient-to-r from-transparent via-customBlue to-transparent opacity-60 lg:group-hover:opacity-100 lg:transition lg:duration-300 bottom-0 h-[1px] w-full">
          &nbsp;
        </div>
        <div className="lg:pl-40 lg:flex">
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
        <div className="flex lg:group">
          <MyLogo />
        </div>
        <div className="lg:pr-40 flex">
          <NavBarList />
        </div>
      </div>
    </div>
  );
}

function NavBarList() {
  const navBarListItems = ["home", "about", "contact"];
  return (
    <ul className="flex gap-4 lg:mr-0 mr-4">
      {navBarListItems.map((item) => {
        return (
          <li className="rounded-lg lg:p-2 lg:text-center lg:m-1 lg:hover:cursor-pointer lg:hover:bg-gray-600 lg:transition lg:duration-200">
            <a href={`#${item}`}>{item}</a>
          </li>
        );
      })}
    </ul>
  );
}

function SocialLinks({ name, Icon, link }) {
  return (
    <li className="rounded-lg lg:p-2 lg:text-center lg:m-1 lg:hover:cursor-pointer lg:hover:bg-gray-600 lg:transition lg:duration-200">
      <a href={link} target="_blank" className="flex items-center lg:gap-x-2">
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
      <h1 className="lg:rounded-lg lg:p-2 text-xl font-bold lg:text-center lg:m-1 lg:hover:cursor-default lg:group-hover:scale-[150%] lg:transition lg:duration-100">
        JA WebDev
      </h1>
    </div>
  );
}

SocialLinks.propTypes = {
  Icon: PropTypes.element,
};
export default NavBar;

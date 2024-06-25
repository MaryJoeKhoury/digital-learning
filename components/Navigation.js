import React, { useState } from "react";

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMobileMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="fixed w-full z-10">
      <nav className="xl:max-w-5xl hidden sm:flex flex-row justify-between items-center text-xl w-full z-1 2xl:max-w-7xl m-auto alignement bg-opacity-70 bg-brown-wood">
        <div className="flex flex-col align-middle">
          <img
            src="./icons/e-learning-on-computer.svg"
            className="w-12"
            alt="E-learning logo"
          />
          <a href="#">
            <p>
              E-<span className="text-white">Learning</span>
            </p>
          </a>
        </div>
        <ul className="flex flex-row list-none">
          <li className="mr-12">
            <a
              href="#"
              className="relative text-white hover:text-black after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-black after:transition-all after:duration-700 hover:after:w-full"
            >
              Home
            </a>
          </li>
          <li className="mr-12">
            <a
              href="#about-us"
              className="relative text-white hover:text-black after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-black after:transition-all after:duration-700 hover:after:w-full"
            >
              About Us
            </a>
          </li>
          <li className="mr-12">
            <a
              href="#pricing-cards"
              className="relative text-white hover:text-black after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-black after:transition-all after:duration-700 hover:after:w-full"
            >
              Pricing
            </a>
          </li>
          <li className="mr-0">
            <a
              href="#contact-us"
              className="relative text-white hover:text-black after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-black after:transition-all after:duration-700 hover:after:w-full"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`sm:hidden fixed top-0 right-0 bg-brown-wood bg-opacity-80 h-screen w-full max-w-xs flex flex-col items-center justify-center text-center text-2xl transform ${
          menuActive ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-10`}
      >
        <ul className="space-y-10">
          <li>
            <a href="#" className="text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" className="text-black">
              About Us
            </a>
          </li>
          <li>
            <a href="#custumor-review" className="text-black">
              Pricing Cards
            </a>
          </li>
          <li>
            <a href="#contact-us" className="text-black">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <nav className="sm:hidden fixed top-0 right-0 p-4 z-20">
        <div
          className={`w-10 h-12 relative cursor-pointer ${
            menuActive ? "active" : ""
          }`}
          id="ham-menu"
          onClick={handleMobileMenu}
        >
          <span className="block absolute left-1/2 w-full h-1 bg-black rounded transform transition-all duration-300 top-1/4 -translate-x-1/2"></span>
          <span className="block absolute left-1/2 w-full h-1 bg-black rounded transition-opacity duration-300 top-1/2 -translate-x-1/2"></span>
          <span className="block absolute left-1/2 w-full h-1 bg-black rounded transform transition-all duration-300 top-3/4 -translate-x-1/2"></span>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

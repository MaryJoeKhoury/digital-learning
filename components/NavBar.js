import React, { useState, useEffect } from "react";
import Link from "next/link";

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const handleMobileMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const changeNavBackGround = () => {
      const isVisible = window.scrollY >= 84;
      setNavBar(isVisible);
    };
    window.addEventListener("scroll", changeNavBackGround);

    return () => window.removeEventListener("scroll", changeNavBackGround);
  }, []);

  return (
    <div
      className={
        navBar ? "fixed z-10 w-full bg-[#ead5c3]" : "fixed z-10 w-full"
      }
    >
      <nav className="z-1 alignement m-auto hidden w-full flex-row items-center justify-between text-xl sm:px-12 md:flex md:px-0 lg:px-12 xl:max-w-7xl xl:px-3">
        <div className="flex flex-col items-center justify-center py-1 align-middle">
          <a href="#">
            <img
              src="./icons/e-learning-on-computer.svg"
              className="w-12"
              alt="E-learning logo"
            />
          </a>
          <a href="/">
            <p>
              E-<span className="font-bold text-black">Learning</span>
            </p>
          </a>
        </div>
        <ul className="flex list-none flex-row">
          <li className="mr-12">
            <a
              href="/"
              className={
                navBar
                  ? "relative font-bold text-black after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-black after:transition-all after:duration-700 hover:text-black hover:after:w-full"
                  : "relative font-bold text-white after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-700 hover:text-white hover:after:w-full"
              }
            >
              Home
            </a>
          </li>
          <li className="mr-12">
            <a
              href="/about"
              className={
                navBar
                  ? "relative font-bold text-black after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-black after:transition-all after:duration-700 hover:text-black hover:after:w-full"
                  : "relative font-bold text-white after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-700 hover:text-white hover:after:w-full"
              }
            >
              About Us
            </a>
          </li>
          <li className="mr-12">
            <a
              href="#pricing-cards"
              className={
                navBar
                  ? "relative font-bold text-black after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-black after:transition-all after:duration-700 hover:text-black hover:after:w-full"
                  : "relative font-bold text-white after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-700 hover:text-white hover:after:w-full"
              }
            >
              Pricing
            </a>
          </li>
          <li className="mr-0">
            <a
              href="#contact-us"
              className={
                navBar
                  ? "relative font-bold text-black after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-black after:transition-all after:duration-700 hover:text-black hover:after:w-full"
                  : "relative font-bold text-white after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-700 hover:text-white hover:after:w-full"
              }
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <div
        className={`fixed right-0 top-0 flex h-screen w-full max-w-xs transform flex-col items-center justify-center bg-[#ead5c3] text-center text-2xl md:hidden ${
          menuActive ? "translate-x-0" : "translate-x-full"
        } z-10 transition-transform duration-300 ease-in-out`}
      >
        <ul className="space-y-10">
          <li>
            <a href="#" className="font-bold text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" className="font-bold text-black">
              About Us
            </a>
          </li>
          <li>
            <a href="#pricing-cards" className="font-bold text-black">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact-us" className="font-bold text-black">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <nav className="fixed right-0 top-0 z-20 p-4 md:hidden">
        <div
          className={`relative h-12 w-10 cursor-pointer ${
            menuActive ? "active" : ""
          }`}
          id="ham-menu"
          onClick={handleMobileMenu}
        >
          <span className="absolute left-1/2 top-1/4 block h-1 w-full -translate-x-1/2 transform rounded bg-black transition-all duration-300"></span>
          <span className="absolute left-1/2 top-1/2 block h-1 w-full -translate-x-1/2 rounded bg-black transition-opacity duration-300"></span>
          <span className="absolute left-1/2 top-3/4 block h-1 w-full -translate-x-1/2 transform rounded bg-black transition-all duration-300"></span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

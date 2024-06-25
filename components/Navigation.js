import React, { useEffect } from "react";

const Navigation = () => {
  return (
    <div>
      <nav class=" xl:max-w-5xl hidden  sm:flex flex-row justify-between items-center text-xl w-full z-1 2xl:max-w-7xl m-auto alignement ">
        <div class="flex flex-col align-middle">
          <img src="./icons/e-learning-on-computer.svg" class="w-12" />
          <a href="#">
            <p>
              E-<span class="text-brown-wood">Learning</span>
            </p>
          </a>
        </div>
        <ul class="flex flex-row list-none">
          <li class="mr-12">
            <a
              href="#"
              className="relative text-white hover:text-brown-wood after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-brown-wood after:transition-all after:duration-700 hover:after:w-full "
            >
              Home
            </a>
          </li>
          <li class="mr-12">
            <a
              href="#about-us"
              className="relative text-white hover:text-brown-wood after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-brown-wood after:transition-all after:duration-700 hover:after:w-full "
            >
              About Us
            </a>
          </li>
          <li class="mr-12">
            <a
              href="#pricing-cards"
              className="relative text-white hover:text-brown-wood after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-brown-wood after:transition-all after:duration-700 hover:after:w-full "
            >
              Pricing
            </a>
          </li>
          <li class="mr-0 ">
            <a
              href="#contact-us"
              className="relative text-white hover:text-brown-wood after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-brown-wood after:transition-all after:duration-700 hover:after:w-full "
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div class=" sm:hidden fixed top-0 right-0 bg-[rgba(17,5,5,0.9)] h-screen w-full max-w-xs flex flex-col items-center justify-center text-center text-2xl transform translate-x-full transition-transform duration-300 ease-in-out z-10">
        <ul class="space-y-10">
          <li>
            <a href="#" class="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" class="text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#custumor-review" class="text-white">
              Customer Review
            </a>
          </li>
          <li>
            <a href="#contact-us" class="text-white">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <nav class=" sm:hidden fixed top-0 right-0 p-4 z-20">
        <div class=" w-10 h-12 relative cursor-pointer" id="ham-menu">
          <span class="block absolute left-1/2 w-full h-1 bg-black rounded transform transition-all duration-300 top-1/4 -translate-x-1/2"></span>
          <span class="block absolute left-1/2 w-full h-1 bg-black rounded transition-opacity duration-300 top-1/2 -translate-x-1/2"></span>
          <span class="block absolute left-1/2 w-full h-1 bg-black rounded transform transition-all duration-300 top-3/4 -translate-x-1/2"></span>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

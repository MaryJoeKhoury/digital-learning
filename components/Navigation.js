import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav class="flex flex-row justify-between text-xl w-full z-1 max-w-7xl m-auto">
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
              href="#custumor-review"
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
      {/* <div class="mobile-menu__items" id="mobile-menu__items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#custumor-review">Customer Review</a>
          </li>
          <li>
            <a href="#contact-us">Contact Us</a>
          </li>
        </ul>
      </div>

      <nav>
        <div class="ham-menu" id="ham-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav> */}
    </div>
  );
};

export default Navigation;

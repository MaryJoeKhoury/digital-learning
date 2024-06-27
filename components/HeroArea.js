import React from "react";
import NavBar from "./NavBar";
import BannerMessage from "./BannerMessage";

const HeroArea = () => {
  return (
    <div className="relative h-[800px] bg-[url('/images/online%20learning.webp')] bg-cover bg-center bg-no-repeat">
      <NavBar />
      <BannerMessage />
    </div>
  );
};

export default HeroArea;

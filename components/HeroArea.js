import React from "react";
import Navigation from "./Navigation";
import BannerMessage from "./BannerMessage";

const HeroArea = () => {
  return (
    <div className="relative h-[800px] bg-[url('/images/online%20learning.webp')] bg-cover bg-center bg-no-repeat">
      <Navigation />
      <BannerMessage />
    </div>
  );
};

export default HeroArea;

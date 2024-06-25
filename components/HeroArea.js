import React from "react";
import Navigation from "./Navigation";
import BannerMessage from "./BannerMessage";

const HeroArea = () => {
  return (
    <div class="bg-[url('/images/online%20learning.webp')] relative h-[800px] bg-no-repeat bg-cover bg-center">
      <Navigation />
      <BannerMessage />
    </div>
  );
};

export default HeroArea;

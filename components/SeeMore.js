import React from "react";
import Link from "next/link";

const SeeMore = (props) => {
  return (
    <Link href={props.link}>
      <div className="flex flex-row items-center hover:cursor-pointer">
        <h1 className="hover:pr-1 hover:underline hover:transition-all hover:duration-300">
          See More
        </h1>
        <img src="/icons/forward.svg" className="w-6" />
      </div>
    </Link>
  );
};

export default SeeMore;

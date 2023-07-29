import React from "react";

import Image from "../asssets/img/house-banner.png";

import Search from "./Search";

const Banner = () => {
  return (
    <section
      className="h-full mx-h-[640px]
     mb-8 xl:mb-24"
    >
      <div className="flex flex-col lg:flex-row">
        <div
          className="lg:ml-9 xl:ml-[135] 
        flex flex-col items-center lg:items-start
         text-center lg:text-left justify-center flex-1 px-4 lg:px-0"
        >
          <h1
            className="text-4xl lg:text-[58px]
            font-semibold leading-none mb-6"
          >
            <span className="mx-w-[480px] mb-8">Rent</span>
            Your Dream House With Us
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit.?efvefvefverververv Lorem ipsum dolor sit amet consectetur,
            adipisicing elit.
          </p>
        </div>

        {/* image */}
        <div
          className="hidden flex-1 lg:flex
        justify-end items-end"
        >
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;

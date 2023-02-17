import React from "react";

function Hero() {
  return (
    <div className="flex items-center h-[33rem] md:h-full mb-14 md:py-5 md:mb-20 md:flex-wrap md:px-3">
      <div className="hidden sm:block">
        <img src="/hero.png " />
      </div>
      <div className="w-1/2 md:w-full ">
        <div className="text-3xl md:text-xl  font-bold mb-4">
          <span className="text-teal-400 text-5xl">Together, </span>
          let's make a difference through giving
        </div>
        <p className="text-gray-600">
          Every time you open a pull request, or push new changes to a branch,
          Netlify automatically builds a preview with a unique URL.
        </p>
        <button className="px-8 py-3 bg-yellow-400 rounded-lg mt-10 text-white font-semibold flex items-centers text-xl">
          About us
          <img src="/right-arrows.png" className="w-7  h-7 ml-4" />
        </button>
      </div>
      <div className="sm:hidden block">
        <img src="/hero.png " />
      </div>
    </div>
  );
}

export default Hero;

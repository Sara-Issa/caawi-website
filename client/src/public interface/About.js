import React from "react";

function About() {
  return (
    <div className="flex justify-center items-center  sm:flex-wrap mb-7  md:px-3">
      <div className="w-1/2 md:w-full  ">
        <div className="mb-10 flex justify-center items-center flex-col">
          <h1 className="text-4xl sm:text-2xl font-extrabold   ">
            {" "}
            <span className="text-yellow-300 font-normal">| </span> About Us
          </h1>
        </div>
        <p class="mt-2 text-lg sm:text-md  text-gray-600">
          Our mission is to educate and raise awareness about the US Website
          Donation Disaster. We provide information on how to verify the
          legitimacy of disaster relief websites before donating to avoid scams
          and ensure your donation reaches its intended recipients. Give
          directly to established organizations to support disaster relief
          efforts.
        </p>
      </div>
      <div className="ml-20 sm:ml-0 sm:mt-7">
        <img src="about.png" className="w-full h-[32rem] sm:h-80" />
      </div>
    </div>
  );
}

export default About;

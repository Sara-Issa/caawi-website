import React from "react";

function FeatureCrd() {
  return (
    <div className="px-20 py-20 md:px-5 md:py-10">
      <div className="font-extrabold text-center  py-14 text-4xl sm:py-4 sm:text-2xl ">
        We<span className="text-teal-400 text-5xl md:text-3xl"> Believe</span>{" "}
        that we can save <br className="block sm:hidden" />
        more<span className="text-yellow-400 text-5xl md:text-3xl">
          {" "}
          lifes
        </span>{" "}
        with you
      </div>
      <div className="flex  justify-between sm:flex-wrap sm:justify-center">
        <div className="w-64 h-64  rounded-lg shadow-lg">
          <div className="flex  flex-col py-10 px-5 text-center items-center">
            <div>
              <img src="/logo1.png" className="w-10 h-10 mb-4 s" />
              <p></p>
            </div>
            <div className="font-bold mb-2 text-teal-500">Donation</div>
            <div className="mb-3">
              {" "}
              Together, let's make a difference through giving
            </div>
            <div className="py-2 px-5 border hover:bg-teal-300 font-bold">
              600 <span className="text-teal-400 text-xl">+</span>{" "}
            </div>
          </div>
        </div>
        <div className="w-64 h-64  rounded-lg shadow-lg">
          {" "}
          <div className="flex  flex-col py-10 px-5 text-center items-center">
            <div>
              <img src="/logo1.png" className="w-10 h-10 mb-4 s" />
              <p></p>
            </div>
            <div className="font-bold mb-2 text-teal-500">Volunteer</div>
            <div className="mb-3">
              {" "}
              Together, let's make a difference through giving
            </div>
            <div className="py-2 px-5 border hover:bg-teal-300 font-bold">
              600 <span className="text-teal-400 text-xl">+</span>{" "}
            </div>
          </div>
        </div>
        <div className="w-64 h-64  rounded-lg shadow-lg">
          {" "}
          <div className="flex  flex-col py-10 px-5 text-center items-center">
            <div>
              <img src="/logo1.png" className="w-10 h-10 mb-4 s" />
              <p></p>
            </div>
            <div className="font-bold mb-2 text-teal-500">Get Hired</div>
            <div className="mb-3">
              {" "}
              Together, let's make a difference through giving
            </div>
            <div className="py-2 px-5 border hover:bg-teal-300 font-bold">
              600 <span className="text-teal-400 text-xl">+</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCrd;

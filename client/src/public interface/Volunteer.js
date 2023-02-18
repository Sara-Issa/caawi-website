import React from "react";

function Volunteer() {
  return (
    <>
      <div className="flex w-full h-full sm:flex-wrap py-20 items-center justify-between px-9 sm:px-3  ">
        <div className="sm:hidden block">
          <img src="/volunter.png" />
        </div>
        <div className="w-[30rem]  mr-4">
          <div className="text-3xl font-bold sm:ml-20 sm:mb-5 text-teal-400 mb-2">
            Volunteer
          </div>
          <div className="hidden sm:block mb-5">
            <img src="/volunter.png" />
          </div>
          <p>
            Donation refers to the act of giving something, usually money or
            goods, to an organization, individual, or cause, without expecting
            anything in return. It is a voluntary act of generosity, motivated
            by a desire to help others or contribute to a particular
            cause.Donations can be made to various entities, including
            non-profit organizations, charities, religious institutions,
            educational institutions, political campaigns, and disaster relief
            efforts.
          </p>
          {/* <div className="border-b-2 border-teal-500 mt-5" /> */}
          <div className="px-5 py-2 border w-1/4 sm:w-1/2 md:w-full right-0 bg-yellow-300 mt-10 font-bold text-white">
            Volunteer
          </div>
        </div>
      </div>
    </>
  );
}

export default Volunteer;
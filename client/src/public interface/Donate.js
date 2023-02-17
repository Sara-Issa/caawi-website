import React from "react";

function Donate() {
  return (
    <div className="flex w-full h-full py-20 sm:flex-wrap items-center justify-between  px-9 sm:px-3">
      <div className="w-[30rem]  mr-4">
        <div className="text-3xl font-bold text-teal-400 mb-2 sm:ml-16">
          Donation
        </div>
        <div className="sm:block hidden mb-5">
          <img src="/donate.png" />
        </div>
        <p>
          Donation refers to the act of giving something, usually money or
          goods, to an organization, individual, or cause, without expecting
          anything in return. It is a voluntary act of generosity, motivated by
          a desire to help others or contribute to a particular cause.Donations
          can be made to various entities, including non-profit organizations,
          charities, religious institutions, educational institutions, political
          campaigns, and disaster relief efforts.
        </p>
        {/* <div className="border-b-2 border-teal-500 mt-5" /> */}
        <div className="px-5 py-2 border w-1/4 sm:w-1/2 right-0 bg-yellow-300 mt-10 font-bold text-white">
          Donate
        </div>
      </div>
      <div className="block sm:hidden">
        <img src="/donate.png" />
      </div>
    </div>
  );
}

export default Donate;

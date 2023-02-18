import React from "react";

function volunteer_apply_form() {
  return (
    <div className="">
      <div className="grid grid-cols-1 m-auto md:grid-col-2 md:m-auto lg:m-20 lg:grid-cols-2">
        <div className="w-10/12 shadow-md mt-10 mb-10 ml-10">
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-sm rounded ">
            <h1 className="text-gray-800 text-4xl font-bold tracking-normal leading-tight mb-10">
              <strong className="text-purered">Volunteer</strong> & Join Us
            </h1>
            <form>
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Name
              </label>
              <input
                id="name"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-yellow font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Name"
              />
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Phone Number
              </label>
              <div className="relative mb-5 mt-2">
                <input
                  id="email2"
                  className="text-gray-600 focus:outline-none focus:border focus:border-yellow font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="252 00 000 0000"
                />
              </div>
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Email
              </label>
              <input
                id="Email"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-yellow font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Email"
              />

              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Location
              </label>
              <input
                id="Email"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-yellow font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Enter Your Location"
              />
              <div className="flex items-center justify-start w-full">
                <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-purered bg-purered rounded text-white px-8 py-2 text-sm w-3/5 m-auto">
                  <strong>Volunteer</strong>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <img
            src="./volunteer.png"
            alt="apply job"
            className="w-auto h-96 m-auto lg:mt-10 lg:ml-6"
          ></img>
          <h1 className="font-extrabold text-3xl pt-14 pb-20 ml-20 lg:ml-10">
            Together We Can,<strong className="text-tarkwaz"> Volunteer</strong>
            <br /> and Join Us For a Better{" "}
            <strong className="text-purered">Future</strong>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default volunteer_apply_form;

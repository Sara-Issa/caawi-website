import React from "react";

function volunteer_form() {
  return (
    <div className='py-80 sm:py-48 md:py-32 lg:py-1'>
        <div className="flex items-center justify-between w-full m-auto h-screen border-none">
      <div className="flex flex-col lg:flex-row w-full items-start lg:items-center ">
        <div className="w-10/12 md:w-8/12 lg:w-6/12 m-auto">
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded">
            <h1 className="text-gray-800 text-4xl font-extrabold tracking-normal leading-tight mb-10">
              Create <strong className='text-purered'>Volunteer</strong>
            </h1>
            <form>
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
               Volunteer Title
              </label>
              <input
                id="name"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-yellow font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Enter Volunteer Title"
              />
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Volunteer Description
              </label>
              <textarea
                  id="email2"
                  type="text"
                  className="text-gray-600 focus:outline-none focus:border focus:border-yellow font-normal w-full h-36 flex items-center mt-2 pl-3 pt-2 ml-1 text-sm border-gray-300 rounded border" 
                  placeholder="Add Volunteer Description"
                />
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Volunteer Location
              </label>
              <input
                id="name"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-yellow font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Enter Volunteering Location"
              />
              <label
                htmlFor="cvc"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Volunteering Date
              </label>
              <div className="relative mb-5 mt-2">
                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
                <input
                  id="cvc"
                  type="date"
                  className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-yellow font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="cash amount"
                />
              </div>
              <div className="flex items-center justify-start w-full">
                <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-purered bg-purered rounded text-white px-8 py-2 text-sm w-3/5 m-auto">
                  <strong>Create Volunteer</strong>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="w-full lg:w-2/3 h-64 dark:bg-gray-800" /> */}
        {/* <div className="w-full lg:w-1/3 h-24 dark:border-gray-700 lg:h-64 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100" /> */}
      </div>
    </div>
    </div>
  );
}

export default volunteer_form;

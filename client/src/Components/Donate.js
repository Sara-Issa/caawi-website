import React from 'react'

function Donate() {
  return (
    <div>
      <div className='py-64 sm:py-40 md:py-32 lg:py-1'>
        <div className="flex items-center justify-between w-full m-auto h-screen border-none">
      <div className="flex flex-col lg:flex-row w-full items-start lg:items-center ">
        <div className="w-10/12 md:w-8/12 lg:w-6/12 m-auto">
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded">
            <h1 className="text-gray-800 text-4xl font-extrabold tracking-normal leading-tight mb-10">
              Create <strong className='text-tarkwaz'>Donation</strong>
            </h1>
            <form>
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Donation Title
              </label>
              <input
                id="name"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-yellow font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Enter Dontation Title"
              />
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Donation Description
              </label>
                <textarea
                  id="email2"
                  type="text"
                  className="text-gray-600 focus:outline-none focus:border focus:border-yellow font-normal w-full h-36 flex items-center mt-2 pt-2 pl-3 ml-1 text-sm border-gray-300 rounded border" 
                  placeholder="Add Donation Description"
                />
              
              <div className="flex items-center justify-start w-full mt-10">
                <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-tarkwaz bg-tarkwaz rounded text-white px-8 py-2 text-sm w-3/5 m-auto">
                  <strong>Create Donation</strong>
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
    </div>
  )
}

export default Donate
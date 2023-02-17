import React from 'react'

const Jobs = () => {
  return (
    <div className="  p-22 m-auto mb-12">
    <h2 className="text-3xl font-bold text-center mb-12 mt-12 "> Vacancy Jobs </h2>

  <div className="flex flex-row gap-6 items-center">
    
    <div className=" w-64  h-fit m-auto bg-[#f9f9f9] rounded-xl  shadow-md shadow-gray-400 ">
      <img className="w-64  h-48 rounded-t-lg" src="volunter.jpg" alt="" />
      <h3 className="text-[#023047 ]  mt-2 text-center text-2xl font-bold mb-2 ">General Manager </h3>
     <p className=" text-center text-black mb-0  mt-2 text-sm px-2">Lorem ipsum dolor sit amet consectetur quidem delectus sit quidem delectus sit quidem delectus sit quidem delectus sit eum quibusdam.</p>  
    <button className="bg-[#f51619] py-1 px-2 w-1/2  rounded mt-6 mb-4 ml-16 text-white">apply</button>
    </div> 

    <div className=" w-64  h-fit m-auto bg-[#f9f9f9] rounded-xl  shadow-md shadow-gray-400 ">
      <img className="w-64 h-48 rounded-t-lg" src="volunter1.jpg"  alt="" />
      <h3 className="text-[#023047 ]  mt-2 text-center text-2xl font-bold mb-2 ">Enumerators  </h3>
     <p className=" text-center text-black mb-0  mt-2 text-sm px-2">Lorem ipsum dolor sit amet consectetur quidem delectus sit quidem delectus sit quidem delectus sit quidem delectus sit eum quibusdam.</p>  
    <button className="bg-[#f51619] py-1 px-2 w-1/2  rounded mt-6 mb-4 ml-16 text-white">apply</button>
    </div> 

    <div className=" w-64  h-fit m-auto bg-[#f9f9f9] rounded-xl  shadow-md shadow-gray-400 ">
      <img className="w-64 rounded-t-lg  h-48" src="volunter2.jpg" alt="" />
      <h3 className="text-[#023047 ]  mt-2 text-center text-2xl font-bold mb-2 "> HR assistant</h3>
     <p className=" text-center text-black mb-0  mt-2 text-sm px-2">Lorem ipsum dolor sit amet consectetur quidem delectus sit quidem delectus sit quidem delectus sit quidem delectus sit eum quibusdam.</p>  
    <button className="bg-[#f51619] py-1 px-2 w-1/2  rounded mt-6 mb-4 ml-16 text-white">apply</button>
    </div> 
  
    
    
    </div>
    
    {/* other */}
    
    </div>
  )
}

export default Jobs

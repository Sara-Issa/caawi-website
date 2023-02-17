import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");
  return (
    <>
      <div className="block md:hidden py-4 px-28  ">
        {/* desktop */}
        <div className="  flex justify-between ">
          <div>
            <img src="/logo4.png" className="w-32  h-auto " />
          </div>
          <div className="flex items-center text-lg  text-gray-500">
            <ul className="flex justify-around">
              <Link to="/">
              <li className="mr-5 border-b-2 border-teal-400 w-14">Home</li>

              </Link>
              <Link to="/volunteer">
              <li className="mr-5">Volunteer</li>
              </Link>
              <li className="mr-5">Article</li>
            </ul>
           
            <Link to="/Donate">
            <button className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded-lg  ">
              Donate
            </button>
            </Link>

          </div>
        </div>
      </div>
      {/* mobile and tablet */}

      <div className="md:block hidden  w-full py-3 ">
        <div className=" flex items-center justify-between">
          <div className="mr-20">
            <img src="/logo1.png" className="w-44  h-5  " />
          </div>
          <div
            className="  w-full  flex justify-end  z-30 h-10    "
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <div>
                <img src="/close.png" className="w-8 h-8  mb-5 " />
              </div>
            ) : (
              <div>
                <img src="/menu.png" className="w-6 h-6 " />
              </div>
            )}
          </div>
        </div>
        {isOpen && (
          <div className="sm:w-52 md:w-96 absolute  bg-gray-100    top-0  right-0 h-screen   ">
            <div
              className="flex justify-end  border-b-2 
               border-gray-200 items-center mt-16 "
            />
            <div className="flex items-center pt-28 flex-col text-xl font-poppins text-gray-500 py-10">
              <ul className="flex justify-around flex-col">
                <li className="mb-5 border-b-2 border-yellow-400 w-full flex items-center">
                  <img src="/home.png" className="w-5 h-5 mr-2" />
                  Home
                </li>

                <li className="mb-5 w-full flex items-center">
                  <img src="/support.png" className="w-5 h-5 mr-2" />
                  Volunteer
                </li>
                <li className="mb-14 w-full flex items-center">
                  <img src="/blogger.png" className="w-5 h-5 mr-2" />
                  Article
                </li>
              </ul>
              <button className="bg-yellow-300 text-white font-semibold px-6 py-3 rounded-md  ">
                Donate
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

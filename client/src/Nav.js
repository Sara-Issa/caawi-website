import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
    
      {/* <!-- nav component --> */}
      <div class="w-full mx-auto">
        <nav class="border-gray-200 px-2 mb-10">
          <div class="container mx-auto flex flex-wrap items-center justify-between">
            <div
              class="hidden md:flex justify-between items-center  md:w-auto md:order-1"
              id="mobile-menu-3"
            >
              <ul class="flex-col pl-80 md:flex-row flex md:space-x-12 mt-4 md:mt-0 md:text-sm md:font-medium">
                <Link to="/">
                  <li>
                    <div
                      class="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-purple md:p-0 rounded"
                      aria-current="page"
                    >
                      Home
                    </div>
                  </li>
                </Link>
                <Link to="/donationForm">
                  <li>
                    <div class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-purple md:p-0">
                      Donation Form
                    </div>
                  </li>
                </Link>
                <Link to="/createInvoice">
                  <li>
                    <div class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-purple md:p-0">
                      Create Invoice
                    </div>
                  </li>
                </Link>
                <Link to="/signup">
                  <li>
                    <div class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-purple md:p-0">
                      <button>
                        <strong className="font-bold">SignUp</strong>
                      </button>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;

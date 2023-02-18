import React from "react";

function Footer() {
  return (
    <div>
      <div class="p-4 bg-teal-50 rounded-lg shadow-xl md:px-6 md:py-8 dark:bg-gray-900 px-28 mt-5">
        <div class="flex items-center justify-between sm:flex-wrap sm:justify-center">
          <div>
            <a href="/" class="flex items-center mb-4 sm:mb-0">
              <img src="/logo2.png" class="h-8 mr-3" alt="Flowbite Logo" />
            </a>
          </div>
          <div>
            <ul class="flex flex-wrap items-center justify-center mb-6  sm:mt-3 text-md text-gray-700 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-4 ">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-4 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-4">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-4 ">
                  Donation
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Article
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 3{" "}
          <a href="/" class="hover:underline">
            Caawi
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;

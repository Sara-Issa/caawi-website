import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

function donation_list() {
  return (
    <div>
      <div class="container w-10/12 px-4 mx-auto sm:px-8">
        <div class="py-8">
          <div class="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 class="text-2xl leading-tight">List of Created Donations</h2>
            <div class="text-end"><button
                  class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-tarkwaz rounded-lg shadow-md hover:bg-tarkwaz focus:outline-none focus:ring-2 focus:ring-tarkwaz focus:ring-offset-2 focus:ring-offset-tarkwas"
                  type="submit"
                >
                  Create Donation
                </button>
            </div>
          </div>
          <div class="px-4 py-4 -mx-4 my-10 overflow-x-auto sm:-mx-8 sm:px-8">
            <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Donation Title
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Donatio Description:
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      status
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <div class="flex items-center">
                        <div class="ml-3">
                          <p class="text-gray-900 font-semibold whitespace-no-wrap">
                           Waaheen Donations
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p class="text-gray-900 whitespace-no-wrap">Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos, senectus volutpat interdum convallis justo lectus pretium, <br/>lacus integer nisl purus ligula dis varius.</p>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                        ></span>
                        <span class="relative">active</span>
                      </span>
                    </td>
                    <td class="flex flex- px-5 py-5 text-lg bg-white border-b border-gray-200">
                    <a href="#" class="text-tarkwaz font-semibolds pr-3 my-3 hover:text-tarkwaz">
                        <AiFillEdit />
                      </a>
                      
                      <a href="#" class="text-purered font-semibolds pl-3 my-3 hover:text-purered">
                        <AiFillDelete />
                      </a>

                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <div class="flex items-center">
                        
                        <div class="ml-3">
                          <p class="text-gray-900 font-semibold whitespace-no-wrap">
                            Drought Donation
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p class="text-gray-900 whitespace-no-wrap">Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos, senectus volutpat interdum convallis justo lectus pretium, <br/>lacus integer nisl purus ligula dis varius.</p>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                        ></span>
                        <span class="relative">active</span>
                      </span>
                    </td>
                    <td class="flex flex- px-5 py-5 text-lg bg-white border-b border-gray-200">
                    <a href="#" class="text-tarkwaz font-semibolds pr-3 my-3 hover:text-tarkwaz">
                        <AiFillEdit />
                      </a>
                      
                      <a href="#" class="text-purered font-semibolds pl-3 my-3 hover:text-purered">
                        <AiFillDelete />
                      </a>

                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <div class="flex items-center">
                        <div class="ml-3">
                          <p class="text-gray-900 font-semibold whitespace-no-wrap">
                            Covid-19 Donations
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p class="text-gray-900 whitespace-no-wrap">Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos, senectus volutpat interdum convallis justo lectus pretium, <br/>lacus integer nisl purus ligula dis varius.</p>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                        ></span>
                        <span class="relative">active</span>
                      </span>
                    </td>
                    <td class="flex flex- px-5 py-5 text-lg bg-white border-b border-gray-200">
                    <a href="#" class="text-tarkwaz font-semibolds pr-3 my-3 hover:text-tarkwaz">
                        <AiFillEdit />
                      </a>
                      
                      <a href="#" class="text-purered font-semibolds pl-3 my-3 hover:text-purered">
                        <AiFillDelete />
                      </a>

                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                <div class="flex items-center">
                  <button
                    type="button"
                    class="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      class=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 "
                  >
                    1
                  </button>
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    class="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      class=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default donation_list
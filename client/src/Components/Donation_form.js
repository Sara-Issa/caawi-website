import React from "react";
import { useState } from "react";
import Axios from "axios"
function Donation_form() {
    const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tixraac, setTixraac] = useState("");
  const [cashType, setCashType] = useState("");
  const [cashAmount, setCashAmount] = useState("");


  const addDonationData = () => {
    Axios.post("http://localhost:3001/donationForm", {
        name: name,
        amount: cashAmount,
        phone: phone,
        tixraac_no: tixraac,
        cash_type: cashType,
    })
  };


  console.log(addDonationData);

  return (
        <div>
            <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    
                        <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Create Donation</h1>
                        <form>
                        <label  className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                           Name
                        </label>
                        <input 
                        onChange={(event) => {
                            setName(event.target.value);
                          }}
                        id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />
                        <label  className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                            Phone Number
                        </label>
                        <div className="relative mb-5 mt-2">
                            <input
                            onChange={(event) => {
                                setPhone(event.target.value);
                              }}
                            id="email2" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="XXXX - XXXX - XXXX - XXXX" />
                        </div>
                        <label  className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                           Tix-raac Number
                        </label>
                        <input 
                        onChange={(event) => {
                            setTixraac(event.target.value);
                          }}
                        id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Tixraac-no." />
                        
                        <label htmlFor="expiry" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                            Cash Type
                        </label>
                        <div className="relative mb-5 mt-2">
                            <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                               
                            </div>
                            <input 
                            onChange={(event) => {
                                setCashType(event.target.value);
                              }}
                            id="expiry" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="cash type" />
                        </div>
                        <label htmlFor="cvc" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                            Cash Amount
                        </label>
                        <div className="relative mb-5 mt-2">
                            <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                               
                            </div>
                            <input 
                            onChange={(event) => {
                                setCashAmount(event.target.value);
                              }}
                            id="cvc" className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="cash amount" />
                        </div>
                        <div className="flex items-center justify-start w-full">
                            <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"onClick={addDonationData}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

  );
}

export default Donation_form;

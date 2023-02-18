import React from "react";
import { useState } from "react";
import Axios from "axios";

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
    });
  };

  console.log(addDonationData);

  return (
    <div className="">
    <div className="grid grid-cols-1 m-auto md:grid-col-2 md:m-auto lg:m-20 lg:grid-cols-2">
      <div className="w-10/12 shadow-md mt-10 mb-10 ml-10">
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-sm rounded ">
          <h1 className="text-gray-800 text-4xl font-bold tracking-normal leading-tight mb-10">
            Enter <strong className="text-tarkwaz">Donation</strong> Data
          </h1>
          <form>
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Name
            </label>
            <input
              onChange={(event) => {
                setName(event.target.value);
              }}
              id="name"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-yellow font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="James"
            />
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Phone Number
            </label>
            <div className="relative mb-5 mt-2">
              <input
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                id="email2"
                className="text-gray-600 focus:outline-none focus:border focus:border-yellow font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="252 00 000 0000"
              />
            </div>
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Tix-raac Number
            </label>
            <input
              onChange={(event) => {
                setTixraac(event.target.value);
              }}
              id="name"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-yellow font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Tixraac-no."
            />

            <label
              htmlFor="expiry"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Cash Type
            </label>

            <div className="relative mb-5 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
              <select
                type="text"
                placeholder="role"
                className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-yellow font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                
                nChange={(event) => {
                  setCashType(event.target.value);
                }}
              >
                <option value="">choose</option>
                <option value="user">Shiling</option>
                <option value="freelancer">Dollar</option>
              </select>
            </div>
            <label
              htmlFor="cvc"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Cash Amount
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
              <input
                onChange={(event) => {
                  setCashAmount(event.target.value);
                }}
                id="cvc"
                className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-yellow font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="cash amount"
              />
            </div>
            <div className="flex items-center justify-start w-full">
              <button
                className="focus:outline-none transition duration-150 ease-in-out hover:bg-tarkwaz bg-tarkwaz rounded text-white px-8 py-2 text-sm w-3/5 m-auto"
                onClick={addDonationData}
              >
                <strong>Submit</strong>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
      <img src="./form.png" alt="privacy" className="w-auto h-96 m-auto lg:mt-10 lg:ml-6"></img>
      <h1 className="font-extrabold text-3xl pt-14 pb-20 ml-20 lg:ml-10">If You <strong className="text-yellow">Donated</strong>  Please Fill The<br/>Form With Your <strong className="text-tarkwaz">Transaction</strong> Details</h1>
      </div>
    </div>
    </div>
  );
}

export default Donation_form;

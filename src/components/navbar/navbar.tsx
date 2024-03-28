'use client'
import { LuLogOut } from "react-icons/lu";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "@/redux/store";
import "./navbar.css";
import { setActiveSearch } from "@/redux/slice/navbarSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from 'react';
import GetDataNavbar from "./_useNavbar.Hook";

const Navbar = () => {
 const data = GetDataNavbar()
 const handleSearchInputChange = (e:any) => {
  const newValue = e.target.value;
  data.setSearchValue(newValue);
};
  return (
    <div className="width p-7 fixed sm:ml-0 flex  h-[10vh] w-full border-b-[1px] border-[#A2A2A2] md:w-[100%]  bg-[#FFFFFF]">
      <div className=" w-full flex flex-row lg:justify-between justify-center">
        <div className="flex">
          <div className="flex justify-center items-center pr-3">
            <Image
              width={250}
              className=" w-15 h-15"
              height={250}
              src={`/logo.png`}
              alt="logo"
            />
          </div>
        </div>
        <div className="h-full  lg:flex  hidden justify-center items-center">
          <form className="w-80" onSubmit={(e) => {
            e.preventDefault();
            data.handleSearchSubmit(); 
          }}>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-50000ray-400ue-500blue-500"
                placeholder="Cari berdasarkan kategori..."
                required
                value={data.searchValue}
                onChange={handleSearchInputChange}
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2-700ue-800 h-8"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

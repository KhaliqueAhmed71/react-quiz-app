import React from "react";

export default function Bottom() {
  return (
    <div className="w-full  h-50 bg-[#D9D9D9] ">
      <div className="w-full h-full max-w-7xl mx-auto px-11 py-6 flex md:flex-row flex-col justify-between items-center gap-y-6">

        <div className="text-center md:text-left">
          <p className="text-ms text-white uppercase">
            Book A Table For Your and Family Members
          </p>
          <h1 className="text-xl md:text-4xl text-white uppercase font-bold">
            Need A Table On Coffee House
          </h1>
        </div>

        <div className="">
          <div className="px-8 py-3 border-2 border-white">
            <p className=" uppercase  text-white font-bold"> Book A Table</p>
          </div>
        </div>
      </div>
    </div>
  );
}

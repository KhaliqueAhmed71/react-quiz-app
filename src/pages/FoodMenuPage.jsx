import React from "react";
import Header from "../components/Header";
import ChefComp from "../components/Chef";
import MenuComp from "../components/Menu";

export default function Menu() {
  return (
    <div className="font-sans text-gray-800 bg-[#F6F6F6]">
      <Header
        PageName={"Food menu page"}
        PageDetail={"Home / Menu Page"}
        Honed={"our food menu"}
      />

      <MenuComp />

      <section className="bg-black text-white py-30 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="">
            <h1 className=" text-3xl font-medium">BOOK A TABLE</h1>
            <p>Book A Open Table For Your Happy Time Spent</p>
          </div>
          <div className="flex flex-col md:flex-row gap-x-10 w-full md:w-auto">
            <div className="relative w-fit">
              <select className="p-2 appearance-none bg-black border-1 border-[#202020] focus:outline-0 w-50 px-2 py-3 text-white ">
                <option>Person</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>

           
              <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  width="11"
                  height="6"
                  viewBox="0 0 11 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.125 1.42188L5.64844 5.71094C5.50781 5.82812 5.36719 5.875 5.25 5.875C5.10938 5.875 4.96875 5.82812 4.85156 5.73438L0.351562 1.42188C0.117188 1.21094 0.117188 0.835938 0.328125 0.625C0.539062 0.390625 0.914062 0.390625 1.125 0.601562L5.25 4.53906L9.35156 0.601562C9.5625 0.390625 9.9375 0.390625 10.1484 0.625C10.3594 0.835938 10.3594 1.21094 10.125 1.42188Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <div className="relative w-fit">
              <input
                type="date"
                defaultValue="2024-12-09"
                className="p-2 appearance-none bg-black text-white border-1 focus:outline-0 border-[#202020] w-50 py-3  pr-10"
                
              />

        
              <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  width="11"
                  height="6"
                  viewBox="0 0 11 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.125 1.42188L5.64844 5.71094C5.50781 5.82812 5.36719 5.875 5.25 5.875C5.10938 5.875 4.96875 5.82812 4.85156 5.73438L0.351562 1.42188C0.117188 1.21094 0.117188 0.835938 0.328125 0.625C0.539062 0.390625 0.914062 0.390625 1.125 0.601562L5.25 4.53906L9.35156 0.601562C9.5625 0.390625 9.9375 0.390625 10.1484 0.625C10.3594 0.835938 10.3594 1.21094 10.125 1.42188Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>


            
            <div className="relative w-fit">
           
            <input
              type="time"
              className="p-2 bg-black appearance-none focus:outline-0 text-white border-1 border-[#202020] w-50 py-3 "
              defaultValue="11:00"
            />
          
              <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  width="11"
                  height="6"
                  viewBox="0 0 11 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.125 1.42188L5.64844 5.71094C5.50781 5.82812 5.36719 5.875 5.25 5.875C5.10938 5.875 4.96875 5.82812 4.85156 5.73438L0.351562 1.42188C0.117188 1.21094 0.117188 0.835938 0.328125 0.625C0.539062 0.390625 0.914062 0.390625 1.125 0.601562L5.25 4.53906L9.35156 0.601562C9.5625 0.390625 9.9375 0.390625 10.1484 0.625C10.3594 0.835938 10.3594 1.21094 10.125 1.42188Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>


            <button className="bg-[#CB3A1A] text-white px-8 py-2  text-center">
              SUBMIT
            </button>
          </div>
        </div>
      </section>

      <ChefComp />
    </div>
  );
}

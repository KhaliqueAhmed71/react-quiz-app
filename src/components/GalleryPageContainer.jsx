import React from "react";

export default function GalleryPageContainer() {
  return (
    <div className="    h-full max-w-[120rem] mx-5   py-10 md:mx-auto ">
      {/* <img src="pizza.png" alt=""  className="absolute bottom-40 left-120 w-40 h-40 "/>

      <img src="racket.png" alt="" className="absolute" />
      <img src="shake.png" alt=""  className="absolute"/> */}

      <div className="flex flex-col gap-y-5 justify-center items-center">
        <div className="bg-[#CB3A1A] text-center rounded-md px-4 p-1 text-white font-semibold ">
          <p className="uppercase text-sm">Food Gallery</p>
        </div>

        <h1 className=" text-2xl md:text-5xl uppercase font-bold ">
          Food Gallery Posts
        </h1>

        <svg
          width="2"
          height="38"
          viewBox="0 0 1 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1" height="31" fill="#CB3A1A" />
        </svg>

        <svg
          width="46"
          height="10"
          viewBox="0 0 48 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="5"
            width="8"
            height="8"
            transform="rotate(-45 0 5)"
            fill="#CB3A1A"
          />
          <rect
            x="13"
            y="5"
            width="8"
            height="8"
            transform="rotate(-45 13 5)"
            fill="#CB3A1A"
          />
          <rect
            x="26"
            y="5"
            width="8"
            height="8"
            transform="rotate(-45 26 5)"
            fill="#CB3A1A"
          />
          <rect
            x="39"
            y="5"
            width="8"
            height="8"
            transform="rotate(-45 39 5)"
            fill="#CB3A1A"
          />
        </svg>
      </div>

      <div className="  flex  justify-center  mx-5 md:0  my-10 ">
        <div className="grid grid-col-1 md:grid-cols-3 gap-6 w-[100%]   ">
          <div className="aspect-square bg-[#D9D9D9] p-4    relative">
            <div className="bg-[#CB3A1AED] flex justify-center items-center w-full h-full ">
              <div className="bg-white w-12 h-12 flex justify-center items-center ">
                <img
                  src="eye.png"
                  alt=""
                  srcset=""
                  className="w-[18px] h-[15px]"
                />
              </div>
            </div>
          </div>

          <div className="aspect-square bg-[#D9D9D9] flex items-center justify-center relative"></div>

          <div className="aspect-square bg-[#D9D9D9] flex items-center justify-center relative"></div>

          <div className="aspect-square bg-[#D9D9D9] flex items-center justify-center relative"></div>

          <div className="aspect-square bg-[#D9D9D9] flex items-center justify-center relative"></div>

          <div className="aspect-square bg-[#D9D9D9] flex items-center justify-center relative"></div>
        </div>
      </div>
    </div>
  );
}

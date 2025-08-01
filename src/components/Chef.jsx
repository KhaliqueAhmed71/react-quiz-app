import React from "react";

export default function PopularChefsGrid() {
  return (
    <section className="px-4 py-20 bg-[#F6F6F6] max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <button className="bg-red-600 text-white px-4 py-1 text-xs uppercase font-bold rounded-md mb-3">
          Make Reservation
        </button>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Our Popular Chefs
        </h2>

        <div className="mt-2 flex flex-col gap-y-4 items-center space-x-1">
          <svg
            width="1"
            height="35"
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
              width="7"
              height="7"
              transform="rotate(-45 0 5)"
              fill="#CB3A1A"
            />
            <rect
              x="13"
              y="5"
              width="7"
              height="7"
              transform="rotate(-45 13 5)"
              fill="#CB3A1A"
            />
            <rect
              x="26"
              y="5"
              width="7"
              height="7"
              transform="rotate(-45 26 5)"
              fill="#CB3A1A"
            />
            <rect
              x="39"
              y="5"
              width="7"
              height="7"
              transform="rotate(-45 39 5)"
              fill="#CB3A1A"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="relative bg-[#D9D9D9] h-100 w-full">
          <div className="absolute top-10 left-12 bg-[#CB3A1A] text-white px-3 py-1 text-xs font-bold leading-tight text-center">
            <div className="text-3xl">09</div>
            <div className="text-md">DEC</div>
          </div>
        </div>

        <div className="bg-gray-100 p-14 flex flex-col  gap-y-20">
          <div className="">
            <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#D9D9D9]" />
                <span className="font-semibold text-xs uppercase">
                  Markus Daniel
                </span>
              </div>

              <div className="flex items-center space-x-1 text-xs">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 6C17.7956 6 18.5587 6.31607 19.1213 6.87868C19.6839 7.44129 20 8.20435 20 9V12C20 12.7956 19.6839 13.5587 19.1213 14.1213C18.5587 14.6839 17.7956 15 17 15V15.966C17 17.026 15.764 17.605 14.95 16.926L12.638 15H10C9.20435 15 8.44129 14.6839 7.87868 14.1213C7.31607 13.5587 7 12.7956 7 12V9C7 8.20435 7.31607 7.44129 7.87868 6.87868C8.44129 6.31607 9.20435 6 10 6H17ZM14 0C14.7956 0 15.5587 0.316071 16.1213 0.87868C16.6839 1.44129 17 2.20435 17 3V4H9C7.93913 4 6.92172 4.42143 6.17157 5.17157C5.42143 5.92172 5 6.93913 5 8V12C5 13.044 5.4 13.996 6.056 14.708L5 15.5C4.176 16.118 3 15.53 3 14.5V13C2.20435 13 1.44129 12.6839 0.87868 12.1213C0.316071 11.5587 0 10.7956 0 10V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H14Z"
                    fill="#CB3A1A"
                  />
                </svg>

                <span>2 Comment</span>
              </div>
            </div>

            <h3 className="text-lg md:text-2xl font-bold mb-4 leading-snug">
              How restaurants foster connections and create memories
            </h3>
          </div>

          <div className="border-2 border-black flex items-center gap-x-2 px-5 py-2 text-sm font-medium w-50 hover:bg-black hover:text-white transition">
            <button className="  ">Read More</button>
            <svg
              width="49"
              height="1"
              viewBox="0 0 49 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="49" y2="0.5" stroke="#D9D9D9" />
            </svg>

            <svg
              width="17"
              height="11"
              viewBox="0 0 17 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 1L15 5.5M15 5.5L10.5 10M15 5.5H1"
                stroke="#CB3A1A"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="bg-gray-100 p-14 flex flex-col  gap-y-20">
          <div className="">
            <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#D9D9D9]" />
                <span className="font-semibold text-xs uppercase">
                  Markus Daniel
                </span>
              </div>

              <div className="flex items-center space-x-1 text-xs">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 6C17.7956 6 18.5587 6.31607 19.1213 6.87868C19.6839 7.44129 20 8.20435 20 9V12C20 12.7956 19.6839 13.5587 19.1213 14.1213C18.5587 14.6839 17.7956 15 17 15V15.966C17 17.026 15.764 17.605 14.95 16.926L12.638 15H10C9.20435 15 8.44129 14.6839 7.87868 14.1213C7.31607 13.5587 7 12.7956 7 12V9C7 8.20435 7.31607 7.44129 7.87868 6.87868C8.44129 6.31607 9.20435 6 10 6H17ZM14 0C14.7956 0 15.5587 0.316071 16.1213 0.87868C16.6839 1.44129 17 2.20435 17 3V4H9C7.93913 4 6.92172 4.42143 6.17157 5.17157C5.42143 5.92172 5 6.93913 5 8V12C5 13.044 5.4 13.996 6.056 14.708L5 15.5C4.176 16.118 3 15.53 3 14.5V13C2.20435 13 1.44129 12.6839 0.87868 12.1213C0.316071 11.5587 0 10.7956 0 10V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H14Z"
                    fill="#CB3A1A"
                  />
                </svg>

                <span>2 Comment</span>
              </div>
            </div>

            <h3 className="text-lg md:text-2xl font-bold mb-4 leading-snug">
              Discovering Affordable Gourmet Experiences in Your City
            </h3>
          </div>

          <div className="border-2 border-black flex items-center gap-x-2 px-5 py-2 text-sm font-medium w-50 hover:bg-black hover:text-white transition">
            <button className="  ">Read More</button>
            <svg
              width="49"
              height="1"
              viewBox="0 0 49 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="49" y2="0.5" stroke="#D9D9D9" />
            </svg>

            <svg
              width="17"
              height="11"
              viewBox="0 0 17 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 1L15 5.5M15 5.5L10.5 10M15 5.5H1"
                stroke="#CB3A1A"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="relative bg-[#D9D9D9] h-100 w-full">
          <div className="absolute top-10 left-12 bg-[#CB3A1A] text-white px-3 py-1 text-xs font-bold leading-tight text-center">
            <div className="text-3xl">09</div>
            <div className="text-md">DEC</div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

const categories = [
  { title: "TEA & DRINKS" },
  { title: "LUNCH MEAL" },
  { title: "DINNER MEAL" },
  { title: "DESSERTS MENU" },
];

export default function Category() {
  return (
    <section className="px-4 py-12 mb-14 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <button className="bg-red-600 text-white px-4 py-1 text-xs uppercase font-bold rounded-md mb-2">
            Make Reservation
          </button>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Discover Our Category
          </h2>

          <div className="mt-2 mb-8 flex flex-col gap-y-3 items-center">
            <svg width="1" height="30" viewBox="0 0 1 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1" height="30" fill="#CB3A1A" />
            </svg>

            <svg width="46" height="10" viewBox="0 0 48 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="5" width="7" height="7" transform="rotate(-45 0 5)" fill="#CB3A1A" />
              <rect x="13" y="5" width="7" height="7" transform="rotate(-45 13 5)" fill="#CB3A1A" />
              <rect x="26" y="5" width="7" height="7" transform="rotate(-45 26 5)" fill="#CB3A1A" />
              <rect x="39" y="5" width="7" height="7" transform="rotate(-45 39 5)" fill="#CB3A1A" />
            </svg>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center group transition-all duration-300"
            >
              {/* Box */}
              <div className="w-full max-w-xs h-60 bg-[#d9d9d9] relative" />
              <div className="relative w-full max-w-[15rem] h-[30px]">
                <div className="absolute left-0 top-0 h-3 w-[1px] bg-black group-hover:bg-[#CB3A1A]" />
                <div className="absolute right-0 top-0 h-3 w-[1px] bg-black group-hover:bg-[#CB3A1A]" />
                <div className="absolute top-3 left-0 right-0 h-[1px] bg-black group-hover:bg-[#CB3A1A]" />
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 h-6 w-[1px] bg-black group-hover:bg-[#CB3A1A]" />
              </div>

              {/* Button */}
              <button className="mt-3 uppercase text-xs font-semibold px-5 py-2 border border-black text-black transition group-hover:border-[#CB3A1A] group-hover:text-[#CB3A1A]">
                {cat.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

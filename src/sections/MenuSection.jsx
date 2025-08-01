import React from "react";

const menuItems = [
  { name: "Mushroom Arancini", price: "$15.00" },
  { name: "Butternut Squash Soup", price: "$15.00" },
  { name: "Braised Short Ribs", price: "$15.00" },
  { name: "Braised Short Ribs", price: "$15.00" },
  { name: "Mushroom Arancini", price: "$15.00" },
  { name: "Mushroom Arancini", price: "$15.00" },
  { name: "Mushroom Arancini", price: "$15.00" },
  { name: "Braised Short Ribs", price: "$15.00" },
  { name: "Braised Short Ribs", price: "$15.00" },
  { name: "Mushroom Arancini", price: "$15.00" },
];

export default function MenuSection() {
  const half = Math.ceil(menuItems.length / 2);
  const leftItems = menuItems.slice(0, half);
  const rightItems = menuItems.slice(half);

  return (
    <section className="bg-[#f8f8f8] px-2">
      <div className="max-w-5xl mx-auto bg-[#111111] text-white py-10 rounded-md px-15">
        {/* Top section */}
        <div className="text-center mb-10">
          <button className="bg-[#CB3A1A] text-white text-xs font-bold uppercase px-4 py-1 rounded mb-3">
            Make Reservation
          </button>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            STARTERS AND MAIN DISHES
          </h2>

          {/* Divider */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-[1px] h-9 bg-[#CB3A1A] mb-2" />
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-[#CB3A1A] rotate-45" />
              ))}
            </div>
          </div>
        </div>

        {/* Menu Headings */}
        <div className="border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-700" />

            <div className="p-3">
              <p className="text-sm tracking-wide mb-1 text-center">
                ━━ BEST DRINKS ━━
              </p>
              <h3 className="text-xl font-bold text-center">STARTER MENU</h3>
            </div>
            <div className="p-3">
              <p className="text-sm tracking-wide mb-1 text-center">
                ━━ BEST DRINKS ━━
              </p>
              <h3 className="text-xl font-bold text-center">MAIN DISHES</h3>
            </div>
          </div>

          {/* Divider line */}
          <div className="border-t border-gray-700" />

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-700" />

            {/* Left Items */}
            <div className="p-3">
              <ul className="space-y-5">
                {leftItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex gap-3 flex-1 min-w-0 items-center">
                      <div className="w-14 h-14 rounded-full bg-[#d9d9d9] flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-400 whitespace-nowrap">
                          Ricotta, goat cheese, beetroot and dateline.
                        </p>
                      </div>
                    </div>
                    <div className="w-[100px] h-px bg-gray-600" />
                    <span className="text-[#CB3A1A] font-bold whitespace-nowrap pl-2">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Items */}
            <div className="p-3">
              <ul className="space-y-5">
                {rightItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex gap-3 flex-1 min-w-0 items-center">
                      <div className="w-14 h-14 rounded-full bg-[#d9d9d9] flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-400 whitespace-nowrap">
                          Ricotta, goat cheese, beetroot and dateline.
                        </p>
                      </div>
                    </div>
                    <div className="w-[100px] h-px bg-gray-600" />
                    <span className="text-[#CB3A1A] font-bold whitespace-nowrap pl-2">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

const chefs = [
  { name: "MIKE HARDSON", role: "CO-FOUNDER" },
  { name: "KENNETH OLIVER", role: "CO-FOUNDER" },
  { name: "QUENTIN SAMUEL", role: "CO-FOUNDER" },
  { name: "PATRICK JAMES", role: "CO-FOUNDER" },
];

const Chef = () => {
  return (
    <div className="py-20 px-4 md:px-12 bg-white text-center ">
      {/* Title */}
      <button className="bg-[#CB3A1A] text-white text-xs font-bold uppercase px-4 py-1 rounded mb-3">
        TEAM MEMBERS
      </button>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        OUR POPULAR CHEFS
      </h2>

      {/* Divider */}
      <div className="flex flex-col items-center gap-2 mb-15">
        <div className="w-[1px] h-9 bg-[#CB3A1A] mb-1" />
        <div className="flex gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-[#CB3A1A] rotate-45" />
          ))}
        </div>
      </div>

      {/* Chef Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-[#d9d9d9] h-[300px] flex flex-col justify-end relative shadow-md"
          >
            {/* Footer */}
            <div className="bg-black text-white px-4 py-3 flex justify-between items-center">
              <div>
                <p className="text-[10px] uppercase">{chef.role}</p>
                <p className="font-bold text-sm">{chef.name}</p>
              </div>
              <button className="bg-[#CB3A1A] w-6 h-6 flex items-center justify-center text-white text-sm">
                &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;

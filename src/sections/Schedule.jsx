import React from "react";
import { PhoneCall } from "lucide-react";

export default function Schedule() {
  return (
    <section className="relative bg-[#1d1f20] pb-32 pt-16 px-4">
      <div className="relative z-10 bg-white max-w-md ml-[18%] text-center shadow-lg p-10 min-h-[520px] -mb-20">
        {/* Reservation Button */}
        <button className="bg-[#CB3A1A] text-white text-xs font-bold uppercase px-4 py-1 rounded mb-4">
          Make Reservation
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-black mb-2">Opening Time</h2>

        {/* Divider */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="w-[1px] h-5 bg-[#CB3A1A]" />
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-[#CB3A1A] rotate-45" />
            <div className="w-2 h-2 bg-[#CB3A1A] rotate-45" />
            <div className="w-2 h-2 bg-[#CB3A1A] rotate-45" />
            <div className="w-2 h-2 bg-[#CB3A1A] rotate-45" />
          </div>
        </div>

        {/* Hours Table */}
        <div className="border-t border-b border-gray-300 text-sm text-black grid grid-cols-2 text-center divide-x divide-gray-300 mb-8">
          {/* Left column */}
          <div className="p-0">
            <div className="p-4 border-b border-gray-300">
              <p className="font-semibold uppercase">Monday to Friday</p>
            </div>
            <div className="p-4 border-b border-gray-300">
              <p className="font-bold text-lg">10:00</p>
            </div>
            <div className="p-4">
              <p className="font-bold text-lg">20:00</p>
            </div>
          </div>

          {/* Right column */}
          <div className="p-0">
            <div className="p-4 border-b border-gray-300">
              <p className="font-semibold uppercase">Friday to Sunday</p>
            </div>
            <div className="p-4 border-b border-gray-300">
              <p className="font-bold text-lg">12:00</p>
            </div>
            <div className="p-4">
              <p className="font-bold text-lg">22:00</p>
            </div>
          </div>
        </div>

        {/* Phone Button */}
        <button className="inline-flex items-center justify-center gap-2 border border-[#CB3A1A] text-[#CB3A1A] font-bold text-sm px-4 py-2 hover:bg-[#CB3A1A] hover:text-white transition">
          <PhoneCall size={18} className="stroke-[#CB3A1A] fill-[#CB3A1A]" />
          +256 1489 362
        </button>
      </div>

      {/* Bottom background to simulate #f8f8f8 area */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#f8f8f8] z-0" />
    </section>
  );
}

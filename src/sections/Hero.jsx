import React from "react";
import Vector from "/vector.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-[80vh] flex items-center justify-start bg-gradient-to-r from-[#221e1e] to-[#373535] overflow-hidden px-4 sm:px-6 md:px-16">
      
      {/* Vector Left */}
      <img
        src={Vector}
        alt="shawarma"
        className="absolute bottom-0 left-0 h-[30vh] sm:h-[35vh] md:h-[41vh] z-10 object-contain"
      />

      {/* Hero Content */}
      <div className="relative z-20 max-w-[90%] sm:max-w-xl text-white ml-8 sm:ml-20 md:ml-52 mt-[-80px] sm:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          LUNCH <span className="font-light">&</span> <br />
          <span className="font-light">HAPPY HOUR</span>
        </h1>
        <p className="mt-4 text-xs sm:text-sm tracking-widest text-gray-300">
          CHECK OUR LATEST SEASONAL PROMOTIONS
        </p>
        <Link to="/reservation" >
        <button className="mt-6 border border-[#a12f16] px-4 sm:px-6 py-2 sm:py-3 text-white hover:bg-[#a12f16] transition duration-300 text-sm sm:text-base">
          Book a Table  —— →
        </button>
        </Link>
      </div>
      <div className="absolute w-[500px] h-[500px] sm:w-[580px] sm:h-[580px] md:w-[650px] md:h-[650px] bg-gradient-to-r from-[#772311] to-[#a12f16] rounded-full right-[-150px] bottom-[-220px] z-0" />
    </section>
  );
};

export default Hero;

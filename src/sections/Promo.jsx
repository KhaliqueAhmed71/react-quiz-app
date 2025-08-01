import React from "react";
import { Link } from "react-router-dom";

const Promo = () => {
  return (
    <>
      <section className="bg-white w-full px-4 sm:px-6 md:px-20 lg:px-28 py-16 sm:py-20 md:py-24 space-y-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Section: Burger Vector + Text */}
          <div className="flex-1 flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-start">
            <div className="flex-shrink-0 -ml-4 sm:-ml-12">
              <img
                src="/burger_vector.png"
                alt="Burger"
                className="w-24 sm:w-28 h-auto object-contain mt-40"
              />
            </div>

            <div className="max-w-md sm:ml-8 text-center sm:text-left">
              <span className="inline-block text-xs font-semibold text-white bg-[#cb3a1a] px-4 py-1 rounded-sm mb-2 uppercase">
                CRISPY, EVERY BITE TASTE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-6">
                Delicious Food For <br className="hidden sm:block" /> Healthy Life
              </h2>

              {/* Features */}
              <div className="space-y-6">
                <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                  <img src="/quality_icon.png" alt="Quality Icon" className="w-10 sm:w-13 h-10 sm:h-13" />
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <div className="w-[3px] h-16 sm:h-18 bg-[#d9d9d9]" />
                    <div>
                      <h4 className="text-sm sm:text-md font-bold mb-1">QUALITY FOOD</h4>
                      <p className="text-sm text-gray-600">
                        The wise man therefore always holds Indies matters this principle information
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                  <img src="/supply_icon.png" alt="Supply Icon" className="w-10 sm:w-13 h-10 sm:h-13" />
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <div className="w-[3px] h-16 sm:h-18 bg-[#d9d9d9]" />
                    <div>
                      <h4 className="text-sm sm:text-md font-bold mb-1">SUPPLY CHAIN MAINTAIN</h4>
                      <p className="text-sm text-gray-600">
                        The wise man therefore always holds Indies matters this principle information
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <Link to="/reservation" >
              <button className="relative border border-black px-8 py-2 rounded-sm text-black font-medium overflow-hidden group mt-10 sm:mt-12">
                <span className="absolute top-0 left-0 h-[3px] w-7 bg-black" />
                <span className="absolute bottom-0 right-0 h-[3px] w-8 bg-black" />
                BOOK A TABLE
              </button>
              </Link>
            </div>
          </div>

          {/* Right Section: Container */}
          <div className="flex-1 flex justify-center">
            <div className="w-[300px] sm:w-[400px] md:w-[450px] h-[250px] sm:h-[300px] md:h-[350px] border-4 border-white bg-gray-200 shadow-md mr-0 lg:mr-20" />
          </div>
        </div>
      </section>

      <div className="w-full mb-14">
        <img
          src="/banner_img.png"
          alt="Promo Banner"
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg px-2 md:px-6 lg:px-10"
        />
      </div>
    </>
  );
};

export default Promo;

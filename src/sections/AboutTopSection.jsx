import React from 'react'

const AboutTopSection = () => {
  return (
    <div className="container mx-auto px-6 md:px-10 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1">
          {/* Badge */}
          <div className="inline-block bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded-full uppercase mb-4">
            Crispy, Every Bite Taste
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Delicious Food For <br /> Healthy Life
          </h2>

          {/* Feature 1 */}
          <div className="flex items-start gap-4 mb-6">
            <img src="/quality_icon.png" alt="Quality" className="w-8 h-8 mt-1" />
            <div>
              <h4 className="font-bold text-lg">Quality Food</h4>
              <p className="text-gray-600 text-sm">The wise man therefore always holds Indies matters this principle information</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4 mb-8">
            <img src="/supply_icon.png" alt="Supply Chain" className="w-8 h-8 mt-1" />
            <div>
              <h4 className="font-bold text-lg">Supply Chain Maintain</h4>
              <p className="text-gray-600 text-sm">The wise man therefore always holds Indies matters this principle information</p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-white border border-black px-6 py-3 font-bold hover:bg-black hover:text-white transition-all duration-200">
            Book A Table
          </button>
        </div>

        {/* Right Image Placeholder */}
        <div className="flex-1">
          <div className="w-full h-[300px] md:h-[400px] bg-gray-300 rounded-md shadow-lg" />
        </div>
      </div>
    </div>
  )
}

export default AboutTopSection

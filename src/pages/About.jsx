import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Bottom';
import AboutTopSection from '../sections/AboutTopSection';
import AboutGallerySection from '../sections/AboutGallerySection';
import AboutCategorySection from '../sections/AboutCategorySection';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1 bg-[#F1F1F1] text-[#111]"
      
      >
        <Header
                PageName={"About US"}
                PageDetail={"Home / About Us"}
                Honed={"About Us"}
              />

      {/* About Top Section */}
<section className="relative py-16 px-4 bg-[#FFFFFF]  flex justify-center">
    {/* Background Icons */}
  <img
    src="/burger_vector.png"
    alt="burger"
    className="absolute top-100 left-6 w-20 h-20 z-0 " 
  />
  <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-5xl relative z-10">
    <AboutTopSection />
  </div>
</section>


<section className="relative py-16 px-4 bg-[#F1F1F1] flex justify-center">
  {/* Background Icons */}
  <img
    src="/burger_vector.png"
    alt="burger"
    className="absolute top-10 left-6 w-20 h-20 z-0 " 
  />
  <img
    src="/pizza.png"
    alt="pizza"
    className="absolute top-1/2 left-4 w-20 h-20 transform -translate-y-1/2 z-0"
  />
  <img
    src="/drink.png"
    alt="pizza"
    className="absolute top-50 right-4 w-20 h-20 transform -translate-y-1/2 z-0"
  />

  {/* Main Content Box */}
  <div className="bg-[#F1F1F1] p-10 rounded-lg shadow-md w-full max-w-5xl relative z-10">
    <AboutGallerySection />
  </div>
</section>

{/* Category Section */}
<section className="py-16 px-4 bg-white flex justify-center">
  <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-5xl">
    <AboutCategorySection />
  </div>
</section>

      </main>

    </div>
  );
};

export default About;

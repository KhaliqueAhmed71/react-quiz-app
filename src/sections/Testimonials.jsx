import React from "react";

const TestimonialCard = ({ quote, name, role }) => {
  return (
    <div className="relative bg-white shadow-md flex overflow-hidden w-full max-w-lg font-sans">
      <div className="flex flex-col items-start p-6 space-y-5 flex-shrink-0">
        <div className="w-40 h-40 bg-[#D9D9D9]" />
        <div className="flex space-x-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="#CB3A1A"
              aria-label="star"
              className="flex-shrink-0"
            >
              <path d="M12 .587l3.668 7.431L24 9.748l-6 5.851 1.417 8.268L12 18.896l-7.417 4.971L6 15.599 0 9.748l8.332-1.73z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Right: content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="mb-4">
          <p className="text-sm text-gray-700 leading-relaxed">{quote}</p>
        </div>

        <div className="flex items-start justify-between">
          <div>
            <div className="font-bold uppercase text-lg">{name}</div>
            <div className="text-xs text-black mt-1">{role}</div>
          </div>
          <div className="ml-4 flex-shrink-0 text-[#CB3A1A]" aria-hidden="true">
            <svg
              width="46"
              height="46"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="40"
                fontWeight="700"
                fill="#CB3A1A"
              >
                “
              </text>
            </svg>
          </div>
        </div>

        <div className="absolute bottom-0 left-55 w-full">
    <div className="h-1 bg-[#CB3A1A] w-full" />
  </div>
      </div>
    </div>
  );
};

export default function CustomerTestimonials() {
  return (
    <section className="relative overflow-hidden py-20 bg-[#f8f8f8] font-sans">
      <div className="absolute inset-0">
        <picture>
          <source
            type="image/png"
            srcSet="/vector_pic@2x.PNG 2x, /vector_pic.PNG 1x"
          />
          <img
            src="/vector_pic.PNG"
            alt="background overlay"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-white opacity-60" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <button className="bg-[#CB3A1A] text-white px-4 py-1 text-xs uppercase font-bold rounded-md mb-3 inline-block">
            Clients Feedback
          </button>
          <h2 className="text-2xl md:text-5xl font-bold tracking-tight uppercase">
            WHAT OUR CUSTOMER SAYS
          </h2>

          <div className="mt-2 flex flex-col gap-y-4 items-center space-x-1">
            <svg width="1" height="35" viewBox="0 0 1 31" fill="none">
              <rect width="1" height="31" fill="#CB3A1A" />
            </svg>
            <svg width="46" height="10" viewBox="0 0 48 10" fill="none">
              {[0, 13, 26, 39].map((x, i) => (
                <rect
                  key={i}
                  x={x}
                  y="5"
                  width="7"
                  height="7"
                  transform={`rotate(-45 ${x} 5)`}
                  fill="#CB3A1A"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex justify-center">
            <TestimonialCard
              quote="The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef’s attention to detail. Highly recommend it for anyone looking for a memorable dining experience."
              name="Kuman Tunman"
              role="Waiter"
            />
          </div>
          <div className="flex justify-center">
            <TestimonialCard
              quote="The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef’s attention to detail. Highly recommend it for anyone looking for a memorable dining experience."
              name="Madison Olivia"
              role="Waiter"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function ShopPage() {
  const products = [
    { id: 1, name: "Beef Bourguignon", price: "$15.00", rating: 5, image: "/burger_vector.png" },
    { id: 2, name: "Spicy Tuna Tartare", price: "$15.00", rating: 5, image: "/vector.png" },
    { id: 3, name: "Margherita Pizza", price: "$15.00", rating: 5, image: "/pizza.png" },
    { id: 4, name: "Braised Short Ribs", price: "$15.00", rating: 5, image: "/burger_vector.png" },
    { id: 5, name: "Vegan Buddha Bowl", price: "$15.00", rating: 5, image: "/vector.png" },
    { id: 6, name: "Chicken Alfredo Pasta", price: "$15.00", rating: 5, image: "/pizza.png" },
    { id: 7, name: "Classic Caesar Salad", price: "$15.00", rating: 5, image: "/vector.png" },
    { id: 8, name: "Roasted Vegetable Platter", price: "$15.00", rating: 5, image: "/burger_vector.png" },
    { id: 9, name: "Pulled Pork Sandwich", price: "$15.00", rating: 5, image: "/pizza.png" },
    { id: 10, name: "Ahi Poke Bowl", price: "$15.00", rating: 5, image: "/vector.png" },
    { id: 11, name: "Chocolate Lava Cake", price: "$12.00", rating: 5, image: "/shake.png" },
    { id: 12, name: "Lobster Bisque", price: "$12.00", rating: 5, image: "/vector.png" },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <svg
        key={index}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="#CB3A1A"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ));
  };

  return (
    <div className="font-sans text-gray-800 bg-[#F6F6F6]">
      <Header
        PageName={"SHOP PAGE"}
        PageDetail={"HOME / SHOP PAGE"}
        Honed={"OUR SHOP PAGE"}
      />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                to={`/product/${product.id}`}
                className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                {/* Product Image */}
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                                  {/* Product Info */}
                  <div className="p-4">
                    {/* Star Rating */}
                    <div className="flex items-center mb-2">
                      {renderStars(product.rating)}
                    </div>
                    
                    {/* Product Name */}
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">
                      {product.name}
                    </h3>
                    
                    {/* Price */}
                    <p className="text-gray-600 font-medium">
                      {product.price}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
} 
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // Mock product data - in a real app, this would come from an API
  const products = {
    1: {
      id: 1,
      name: "Beef Bourguignon",
      price: "$15.00",
      rating: 5,
      reviews: 1,
      sku: "17",
      categories: "Main Course, French",
      tags: "Beef, Wine, Traditional",
      shortDescription: "Eget taciti odio cum habitant egestas conubia turpis phasellus, ante parturient donec duis primis nam faucibus augue malesuada venenatis",
      description: `Credibly negotiate emerging materials whereas clicks-and-mortar intellectual capital. Compellingly whiteboard client-centric sourcescross-platform schemas. Distinctively develop future-proof outsourcing without multimedia based portals. Progressively coordinate generation architectures for collaborative solutions. Professionally restore backward-compatible quality vectors before customer directed metrics. Holisticly restore technically sound internal or "organic" sources before client-centered human capital underwhelm holistic mindshare for prospective innovation.

Seamlessly target fully tested infrastructures whereas just in time process improvements. Dynamically exploit team driven functionalities vis a vis global total linkage redibly synthesize just in time technology rather than open-source strategic theme areas.`,
      image: "/burger_vector.png",
      onSale: true
    },
    2: {
      id: 2,
      name: "Spicy Tuna Tartare",
      price: "$15.00",
      rating: 5,
      reviews: 1,
      sku: "18",
      categories: "Appetizer, Seafood",
      tags: "Tuna, Spicy, Fresh",
      shortDescription: "Eget taciti odio cum habitant egestas conubia turpis phasellus, ante parturient donec duis primis nam faucibus augue malesuada venenatis",
      description: `Credibly negotiate emerging materials whereas clicks-and-mortar intellectual capital. Compellingly whiteboard client-centric sourcescross-platform schemas. Distinctively develop future-proof outsourcing without multimedia based portals. Progressively coordinate generation architectures for collaborative solutions. Professionally restore backward-compatible quality vectors before customer directed metrics. Holisticly restore technically sound internal or "organic" sources before client-centered human capital underwhelm holistic mindshare for prospective innovation.

Seamlessly target fully tested infrastructures whereas just in time process improvements. Dynamically exploit team driven functionalities vis a vis global total linkage redibly synthesize just in time technology rather than open-source strategic theme areas.`,
      image: "/vector.png",
      onSale: false
    },
    3: {
      id: 3,
      name: "Margherita Pizza",
      price: "$15.00",
      rating: 5,
      reviews: 1,
      sku: "19",
      categories: "Main Course, Italian",
      tags: "Pizza, Cheese, Traditional",
      shortDescription: "Eget taciti odio cum habitant egestas conubia turpis phasellus, ante parturient donec duis primis nam faucibus augue malesuada venenatis",
      description: `Credibly negotiate emerging materials whereas clicks-and-mortar intellectual capital. Compellingly whiteboard client-centric sourcescross-platform schemas. Distinctively develop future-proof outsourcing without multimedia based portals. Progressively coordinate generation architectures for collaborative solutions. Professionally restore backward-compatible quality vectors before customer directed metrics. Holisticly restore technically sound internal or "organic" sources before client-centered human capital underwhelm holistic mindshare for prospective innovation.

Seamlessly target fully tested infrastructures whereas just in time process improvements. Dynamically exploit team driven functionalities vis a vis global total linkage redibly synthesize just in time technology rather than open-source strategic theme areas.`,
      image: "/pizza.png",
      onSale: true
    }
  };

  const product = products[productId] || products[1]; // Default to first product if not found

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

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-[#F6F6F6]">
      <Header
        PageName={"SHOP DETAILS"}
        PageDetail={"HOME / SHOP DETAILS"}
        Honed={"SHOP DETAILS"}
      />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Product Overview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Section - Product Image */}
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.onSale && (
                  <div className="absolute top-4 left-4 bg-[#CB3A1A] text-white px-3 py-1 rounded-full text-sm font-semibold uppercase">
                    Sale
                  </div>
                )}
              </div>
            </div>

            {/* Right Section - Product Details */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600 text-sm">
                  ({product.reviews} customer review)
                </span>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold text-gray-900">
                {product.price}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 13H5v-2h14v2z"/>
                    </svg>
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="w-16 text-center border-none focus:outline-none"
                    min="1"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                  </button>
                </div>
                <button className="bg-[#CB3A1A] text-white px-8 py-3 font-semibold uppercase hover:bg-[#A02E15] transition-colors">
                  Add to Cart
                </button>
              </div>

              {/* Product Metadata */}
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-semibold">SKU:</span> {product.sku}</p>
                <p><span className="font-semibold">Categories:</span> {product.categories}</p>
                <p><span className="font-semibold">Tags:</span> {product.tags}</p>
              </div>
            </div>
          </div>

          {/* Detailed Information Section */}
          <div className="bg-white rounded-lg p-8">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-6 py-3 font-semibold uppercase text-sm ${
                  activeTab === "description"
                    ? "text-[#CB3A1A] border-b-2 border-[#CB3A1A]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("additional")}
                className={`px-6 py-3 font-semibold uppercase text-sm ${
                  activeTab === "additional"
                    ? "text-[#CB3A1A] border-b-2 border-[#CB3A1A]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Additional Information
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-6 py-3 font-semibold uppercase text-sm ${
                  activeTab === "reviews"
                    ? "text-[#CB3A1A] border-b-2 border-[#CB3A1A]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Review (03)
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === "description" && (
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>{product.description}</p>
                </div>
              )}
              
              {activeTab === "additional" && (
                <div className="text-gray-600">
                  <p>Additional product information will be displayed here.</p>
                </div>
              )}
              
              {activeTab === "reviews" && (
                <div className="text-gray-600">
                  <p>Customer reviews will be displayed here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
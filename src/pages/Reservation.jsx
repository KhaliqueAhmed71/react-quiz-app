import React, { useState } from "react";
import Header from "../components/Header";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Table Booked:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div>
      <Header
              PageName={"Book A Table"}
              PageDetail={"Home / Book a Table"}
              Honed={"Reservation"}
            />
    <div className="bg-[#111111] text-white">

      {/* Form Section */}
      <div className="bg-[#111111] px-4 md:px-20 py-12">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          <input
            type="text"
            name="guests"
            placeholder="Number of Guests"
            onChange={handleChange}
            className="bg-[#1a1a1a] px-4 py-3 border border-[#333] text-white placeholder-gray-500 focus:outline-none"
            required
          />
          <input
            type="date"
            name="date"
            placeholder="Select Date"
            onChange={handleChange}
            className="bg-[#1a1a1a] px-4 py-3 border border-[#333] text-white focus:outline-none"
            required
          />
          <input
            type="time"
            name="time"
            placeholder="Select Time"
            onChange={handleChange}
            className="bg-[#1a1a1a] px-4 py-3 border border-[#333] text-white focus:outline-none"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="bg-[#1a1a1a] px-4 py-3 border border-[#333] text-white placeholder-gray-500 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="bg-[#1a1a1a] px-4 py-3 border border-[#333] text-white placeholder-gray-500 focus:outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="bg-[#1a1a1a] px-4 py-3 border border-[#333] text-white placeholder-gray-500 focus:outline-none"
            required
          />
          {/* Full Width TextArea */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Optional Message"
            onChange={handleChange}
            className="md:col-span-2 bg-[#1a1a1a] px-4 py-3 border border-[#333] text-white placeholder-gray-500 focus:outline-none"
          ></textarea>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white uppercase px-8 py-3 transition font-semibold tracking-wide"
            >
              Book a Table — →
            </button>
          </div>
        </form>
      </div>

      {/* Image & Info Section */}
      <div className="bg-white py-16 px-4 md:px-24 flex flex-col md:flex-row gap-10 justify-center items-center">
        {/* Overlapping Images */}
        <div className="relative w-64 h-64 bg-gray-300">
          <div className="absolute top-16 left-16 w-40 h-40 bg-gray-400" />
        </div>

        {/* Opening Hours and Address */}
        <div className="text-black max-w-sm">
          <div className="mb-8">
            <h4 className="font-semibold mb-1 text-lg">OPENING HOURS</h4>
            <p className="text-sm">Open: 10am - 9pm (Mon - Sun)</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-lg">VISIT YOUR RESTAURANT</h4>
            <p className="text-sm">78 St. Avenue, Los Angeles</p>
            <p className="text-sm">hello@delish.com</p>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
};

export default Reservation;

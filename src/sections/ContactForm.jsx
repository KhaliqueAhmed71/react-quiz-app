// src/sections/ContactForm.jsx
import { User, Mail } from "lucide-react";
export default function ContactForm() {
  return (
    
    <div className="bg-white p-10 max-w-3xl w-full rounded-lg shadow-md">
      <h3 className="text-center text-lg font-bold mb-6">LEAVE A MESSAGE</h3>
      <p className="text-center text-sm text-gray-500 mb-8">
        Leave your details and message below, and our team will get back to you as soon as possible.
      </p>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Your Name"
              className="pl-10 border border-gray-300 p-3 rounded-md w-full"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Email Address"
              className="pl-10 border border-gray-300 p-3 rounded-md w-full"
            />
          </div>
        </div>
        <input
          type="text"
          placeholder="Select Subject"
          className="border border-gray-300 p-3 rounded-md w-full"
        />
        <textarea
          rows="5"
          placeholder="Type Your Message"
          className="border border-gray-300 p-3 rounded-md w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-red-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-red-700 transition w-full"
        >
          SUBMIT MESSAGE →
        </button>
      </form>
    </div>
  );
}

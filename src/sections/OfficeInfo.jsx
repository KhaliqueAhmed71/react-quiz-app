// src/sections/OfficeInfo.jsx
import { Phone, MapPin, Clock } from "lucide-react";

export default function OfficeInfo() {
  return (
    <div className="bg-white p-8 max-w-lg w-full rounded-md shadow-sm space-y-8 border border-gray-200">
      {/* Heading */}
      <div>
        <h3 className="text-xl font-bold text-[#111] mb-1">OFFICE INFORMATION</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Completely recapitalize 24/7 communities via standards compliant metrics whereas.
        </p>
      </div>

      {/* Phone Info */}
      <div className="flex items-start gap-4 border-t pt-4">
        <div className="bg-[#FFF3F1] p-3 rounded-md">
          <Phone className="text-red-600" size={20} />
        </div>
        <div>
          <p className="font-semibold text-[#111]">Phone Number & Email</p>
          <p className="text-sm text-gray-700">+(310) 2591 21563</p>
          <p className="text-sm text-gray-700">help-delish@gmail.com</p>
        </div>
      </div>

      {/* Address Info */}
      <div className="flex items-start gap-4 border-t pt-4">
        <div className="bg-[#FFF3F1] p-3 rounded-md">
          <MapPin className="text-red-600" size={20} />
        </div>
        <div>
          <p className="font-semibold text-[#111]">Our Office Address</p>
          <p className="text-sm text-gray-700">
            258 Dancing Street, Miland Line,<br />
            HUYI 21563, NewYork
          </p>
        </div>
      </div>

      {/* Work Time Info */}
      <div className="flex items-start gap-4 border-t pt-4">
        <div className="bg-[#FFF3F1] p-3 rounded-md">
          <Clock className="text-red-600" size={20} />
        </div>
        <div>
          <p className="font-semibold text-[#111]">Official Work Time</p>
          <p className="text-sm text-gray-700">7:00am - 6:00pm (Mon - Fri)</p>
          <p className="text-sm text-red-600">Sat, Sun & Holiday Closed</p>
        </div>
      </div>
    </div>
  );
}

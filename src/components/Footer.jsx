import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white px-6 sm:px-14 md:px-28 lg:px-36 py-16 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Logo & Address */}
        <div>
          <img src="/footer_logo.png" alt="Delish Logo" className="w-40 mb-6" />
          <div className="mt-10 pt-6 border-t border-[#333] max-w-[250px] mr-auto flex flex-col sm:flex-row justify-between text-sm text-gray-400 gap-4 sm:gap-0"></div>
          <p className="text-sm mb-6 leading-relaxed">
            1234, Restaurant St, South City
            <br />
            New York 0124
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
              <div
                key={idx}
                className="bg-[#d9d9d9] p-2 rounded-full w-9 h-9 flex items-center justify-center hover:bg-[#cb3a1a] transition-colors"
              >
                <Icon className="text-black hover:text-white transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5">LINKS</h3>
          <ul className="space-y-2 text-sm">
            {["About Us", "Meet our team", "Case stories", "Latest News", "Contact"].map((item, i) => (
              <li key={i} className="hover:text-[#cb3a1a] cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Other Link */}
        <div>
          <h3 className="text-lg font-semibold mb-5">OTHER LINK</h3>
          <ul className="space-y-2 text-sm">
            {["Careers", "Creative Agency", "Digital Agency", "Marketing", "Digital Services"].map((item, i) => (
              <li key={i} className="hover:text-[#cb3a1a] cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-5">NEWSLETTER</h3>
          <p className="text-sm mb-5 leading-relaxed">
            Subscribe us & receive our offers and updates to your inbox directly
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full py-4 pl-3 pr-12 text-sm bg-[#1d1c1c] text-white placeholder:text-gray-400"
            />
            <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#cb3a1a] p-2 rounded-full text-white hover:bg-[#a12f16]">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 border-t border-[#333] pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-400 gap-4 sm:gap-0">
        <p className="text-center sm:text-left">
          All rights reserved 2024. Delish Restaurant
        </p>
        <div className="flex justify-center sm:justify-end gap-6">
          <span className="hover:text-[#cb3a1a] cursor-pointer transition-colors">Terms Of Use</span>
          <span className="hover:text-[#cb3a1a] cursor-pointer transition-colors">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

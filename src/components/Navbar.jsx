import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; 

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  

  const navbarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Pages",
      submenu: [
        { name: "Menu", href: "/menu" },
        { name: "Gallery", href: "/gallery" },
        { name: "Our Team", href: "/team" },
        { name: "About Us", href: "/about" },
      ],
    },
    {
      name: "Shop",
      submenu: [{ name: "Shop Fresh Food", href: "/shop" }],
    },
    {
      name: "Blog",
      submenu: [{ name: "Latest Blogs", href: "/blog" }],
    },

    {
      name: "Contact",
      submenu: [{ name: "Contact Us", href: "/contact" }],
    },
  ];

  return (
    <div ref={navbarRef} className="text-white font-jost text-sm">
      {/* Top Info Bar */}
      <div className="bg-[#111111] py-1 px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-xs md:text-sm gap-1 md:gap-0">
          <div className="flex items-center gap-2 whitespace-nowrap justify-center md:justify-start">
            <span>Mon-Wed: 11a-9p</span>
            <span className="text-[#484848] text-sm">&#9830;</span>
            <span>Thurs-Sat: 11a-10p</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-end text-center md:text-right whitespace-nowrap">
            <span>reservations@Delish.com</span>
            <span className="text-[#484848] text-sm">&#9830;</span>
            <span>123 456 7899</span>
            <span className="text-[#484848] text-sm">&#9830;</span>
            <span>296 Ridao Avenie Mor Berlin 251584</span>
          </div>
        </div>
        <div className="border-t border-[#484848] mt-1"></div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#111111] px-4 md:px-8 relative">
        <div className="flex justify-between items-center py-3">
          <div>
            <img src="/logo.png" alt="Delish Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-medium tracking-wide text-white text-sm">
            {navLinks.map((link) => (
              <div className="relative" key={link.name}>
                {link.submenu ? (
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === link.name ? null : link.name
                      )
                    }
                    className="flex items-center hover:text-red-500 transition"
                  >
                    {link.name}
                    <ChevronDown size={14} className="ml-1" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="flex items-center hover:text-red-500 transition"
                  >
                    {link.name}
                  </Link>
                )}

                {link.submenu && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-2 w-44 bg-[#1a1a1a] shadow-lg rounded-sm z-50">
                    <ul className="flex flex-col gap-3 py-4 px-4">
                      {link.submenu.map((sublink) => (
                        <li key={sublink.name}>
                          <Link
                            to={sublink.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block text-sm font-medium text-white hover:text-red-500 transition"
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Book Button Desktop */}
          <div className="hidden md:block">
            <Link
              to="/reservation"
              className="flex items-center gap-2 border border-red-600 px-5 py-[6px] text-sm uppercase text-white hover:bg-red-600 transition"
            >
              <span>Book a Table</span>
              <span>——</span>
              <span>→</span>
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-start space-y-4 pb-4 px-2 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <div key={link.name} className="w-full">
                {link.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.name ? null : link.name
                        )
                      }
                      className="flex items-center w-full justify-between text-left hover:text-red-500 transition"
                    >
                      {link.name}
                      <ChevronDown size={14} />
                    </button>
                    {activeDropdown === link.name && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {link.submenu.map((sublink) => (
                          <li key={sublink.name}>
                            <Link
                              to={sublink.href}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                              className="block text-sm text-white hover:text-red-500 transition"
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left text-white hover:text-red-500 transition"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/reservation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full border border-red-600 px-5 py-2 text-sm uppercase text-white hover:bg-red-600 transition text-left"
            >
              Book a Table — →
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;

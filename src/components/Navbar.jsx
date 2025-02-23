import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-black fixed top-0 left-0 w-full z-50 p-4 border-b-2 border-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-yellow-400 text-3xl font-bold">
            <a href="/">SeekhoCode</a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div
            className="md:hidden flex flex-col space-y-1.5 cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>

          {/* Navbar Links */}
          <ul
            className={`md:flex md:space-x-6 md:items-center absolute md:relative top-14 md:top-0 right-0 bg-black md:bg-transparent w-full md:w-auto p-4 md:p-0 transition-all duration-300 ${
              isMobileMenuOpen 
                ? "block border-t border-white/20" 
                : "hidden md:flex"
            }`}
          >
            {["Home", "Events", "About", "Team", "Contact"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white text-lg font-medium block py-2 md:py-0 transition-all duration-300 ease-in-out group"
                >
                  <span className="relative z-10 group-hover:text-yellow-400 transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <button className="bg-transparent text-white border-2 border-yellow-400 px-5 py-2 text-lg font-medium rounded transition-all duration-300 ease-in-out hover:bg-black hover:text-yellow-400">
                Join Us
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Adding top padding so content doesn't get hidden under navbar */}
      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;

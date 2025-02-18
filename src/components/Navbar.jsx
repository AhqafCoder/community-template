import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-black fixed top-0 left-0 w-full z-50 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-yellow-400 text-2xl font-bold">
            <a href="/">SeekhoCode</a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div
            className="md:hidden flex flex-col space-y-1.5 cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-opacity ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-transform ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>

          {/* Navbar Links */}
          <ul
            className={`md:flex md:space-x-6 md:items-center absolute md:relative top-14 md:top-0 right-0 bg-black md:bg-transparent w-full md:w-auto p-4 md:p-0 transition-all duration-300 ${
              isMobileMenuOpen ? "block" : "hidden md:flex"
            }`}
          >
            <li>
              <a
                href="#home"
                className="text-white hover:text-yellow-400 transition-colors block py-2 md:py-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="text-white hover:text-yellow-400 transition-colors block py-2 md:py-0"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-yellow-400 transition-colors block py-2 md:py-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="text-white hover:text-yellow-400 transition-colors block py-2 md:py-0"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-yellow-400 transition-colors block py-2 md:py-0"
              >
                Contact
              </a>
            </li>
            <li>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-colors">
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

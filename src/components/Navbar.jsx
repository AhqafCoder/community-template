import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-yellow-400 text-2xl font-bold">
          <a href="/">SearchCode</a>
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
          className={`md:flex md:space-x-6 md:items-center ${
            isMobileMenuOpen
              ? "absolute top-16 right-0 bg-black w-full p-4 space-y-4"
              : "hidden"
          }`}
        >
          <li>
            <a
              href="#home"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#events"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#team"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-yellow-400 transition-colors"
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
  );
};

export default Navbar;
import React from "react";
import { FaLinkedin, FaDiscord, FaTelegram, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 bottom-0 items-center">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        {/* About Section */}
        <div className="flex-1 min-w-[250px] text-center md:text-left">
          <h2 className="text-2xl font-extrabold mb-4">SeekhoCode Community</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            SeekhoCode Community is a hub for coding enthusiasts on Discord. Together, we explore the world of technology and endless opportunities for growth.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[200px] text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            {["Home", "About", "Team", "Events", "Testimonials", "Opportunity"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-yellow-400 transition duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Join Us */}
        <div className="flex-1 min-w-[200px] text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Join Us</h3>
          <ul className="text-gray-400 space-y-2">
            {["Events", "Volunteer Group", "Community"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-yellow-400 transition duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex-1 min-w-[250px] text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Want to stay updated?</h3>
          <p className="text-gray-400 mb-3">Subscribe for the latest updates.</p>
          <div className="flex items-center justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full max-w-[220px] bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 text-black px-4 py-3 rounded-r-md font-semibold hover:bg-yellow-500 transition duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Contact & Social Media */}
      <div className="mt-10 w-full flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
          <div className="flex items-center space-x-2">
            <MdLocationOn className="text-yellow-400" />
            <span>UP, India</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdEmail className="text-yellow-400" />
            <span>seekhocode@gmail.com</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-yellow-400 text-2xl mt-6">
          {[FaLinkedin, FaDiscord, FaTelegram, FaGithub, FaYoutube, FaTwitter].map((Icon, index) => (
            <a key={index} href="#" className="hover:text-white transition duration-300 transform hover:scale-110">
              <Icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-500 mt-6 text-sm text-center">
          Copyright © 2025 <span className="text-yellow-400">SeekhoCode Community</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

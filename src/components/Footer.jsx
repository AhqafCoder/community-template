import React from "react";
import { FaLinkedin, FaDiscord, FaTelegram, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6  bottom-0 items-center ">
      <div className="max-w-7xl w-full flex flex-wrap justify-between gap-8">

        {/* About Section */}
        <div className="flex-1 min-w-[250px] text-center md:text-left">
          <h2 className="text-2xl font-extrabold mb-3">CodeIN Community</h2>
          <p className="text-gray-400 text-sm">
            CodeIN Community is the Community of Coding Enthusiasts on Discord.
            Together we aim to explore the untouched world of technology and
            tremendous growth-making fields.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[200px] text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Team</a></li>
            <li><a href="#" className="hover:text-yellow-400">Events</a></li>
            <li><a href="#" className="hover:text-yellow-400">Testimonials</a></li>
            <li><a href="#" className="hover:text-yellow-400">Opportunity</a></li>
          </ul>
        </div>

        {/* Join Us */}
        <div className="flex-1 min-w-[200px] text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">Join Us</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Events</a></li>
            <li><a href="#" className="hover:text-yellow-400">Volunteer Group</a></li>
            <li><a href="#" className="hover:text-yellow-400">Community</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex-1 min-w-[250px] text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">Want to stay updated?</h3>
          <p className="text-gray-400 mb-3">Subscribe to get the latest updates.</p>
          <div className="flex items-center justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full max-w-[200px] bg-gray-700 text-white rounded-l-md focus:outline-none"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Contact & Social Media */}
      <div className="mt-8 w-full flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
          <div className="flex items-center space-x-2">
            <MdLocationOn />
            <span>Asansol, India - 713305</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdEmail />
            <span>codeincommunity@gmail.com</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-yellow-400 text-2xl mt-4">
          <a href="#" className="hover:text-white"><FaLinkedin /></a>
          <a href="#" className="hover:text-white"><FaDiscord /></a>
          <a href="#" className="hover:text-white"><FaTelegram /></a>
          <a href="#" className="hover:text-white"><FaGithub /></a>
          <a href="#" className="hover:text-white"><FaYoutube /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 mt-6 text-sm text-center">
          Copyright © 2025 <span className="text-yellow-400">CodeIN Community</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

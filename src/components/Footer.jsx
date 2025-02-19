import React from "react";
import { FaLinkedin, FaDiscord, FaTelegram, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">

        {/* About Section */}
        <div>
          <h2 className="text-2xl font-extrabold mb-3">CodeIN Community</h2>
          <p className="text-gray-400">
            CodeIN Community is the Community of Coding Enthusiasts on Discord.
            Together we aim to explore the untouched world of technology and
            tremendous growth-making fields.
          </p>
        </div>

        {/* Quick Links */}
        <div>
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
        <div>
          <h3 className="text-xl font-semibold mb-3">Join Us</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Events</a></li>
            <li><a href="#" className="hover:text-yellow-400">Volunteer Group</a></li>
            <li><a href="#" className="hover:text-yellow-400">Community</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Want to stay updated?</h3>
          <p className="text-gray-400 mb-3">Subscribe to get the latest updates.</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 flex-grow bg-gray-700 text-white rounded-l-md focus:outline-none"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Contact & Social Media */}
      <div className="mt-12 text-center">
        <div className="flex justify-center space-x-6 mb-6 text-gray-400">
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
        <div className="flex justify-center space-x-6 text-yellow-400 text-2xl">
          <a href="#" className="hover:text-white"><FaLinkedin /></a>
          <a href="#" className="hover:text-white"><FaDiscord /></a>
          <a href="#" className="hover:text-white"><FaTelegram /></a>
          <a href="#" className="hover:text-white"><FaGithub /></a>
          <a href="#" className="hover:text-white"><FaYoutube /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 mt-6 text-sm">
          Copyright © 2025 <span className="text-yellow-400">CodeIN Community</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

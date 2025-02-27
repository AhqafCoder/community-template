import React from "react";
import { FaCalendarAlt, FaPlug, FaTrophy, FaSmileBeam, FaMicrochip, FaLaptop, FaUsers, FaGlobe, FaLightbulb, FaHandsHelping, FaMedal, FaClock } from "react-icons/fa";

const reasons = [
  { icon: <FaCalendarAlt size={30} />, title: "Customize Your Events" }, // Calendar for event customization
  { icon: <FaPlug size={30} />, title: "Easy Integration" }, // Plug for smooth integration
  { icon: <FaTrophy size={30} />, title: "Popular Tech Events" }, // Trophy for tech competitions
  { icon: <FaSmileBeam size={30} />, title: "Positive Vibe" }, // Smiley face for good experience
  { icon: <FaMicrochip size={30} />, title: "Advance Technology" }, // Microchip for advanced tech
  { icon: <FaLaptop size={30} />, title: "Cross-platform (mobile & PC)" }, // Laptop for multi-platform
  { icon: <FaUsers size={30} />, title: "Compete in Online & Offline Modes" }, // Users for competition
  { icon: <FaGlobe size={30} />, title: "Multilingual" }, // Globe for language support
  { icon: <FaLightbulb size={30} />, title: "Learning with Competition" }, // Lightbulb for learning
  { icon: <FaHandsHelping size={30} />, title: "Helping Community" }, // Hands for community help
  { icon: <FaMedal size={30} />, title: "The Most Competitive Events" }, // Medal for competition
  { icon: <FaClock size={30} />, title: "Get Results as Soon as Possible" }, // Clock for quick results
];


const WhyChooseUs = () => {
  return (
    <section className="text-center py-16 bg-black relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-yellow-500 to-green-700 opacity-30 blur-2xl"></div>

      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 relative z-10">
        12 Reasons to Choose Us
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative z-10">
        {reasons.map((reason, index) => (
          <div key={index} className="flex flex-col items-center text-white">
            <div className="bg-yellow-400 p-4 rounded-full text-black shadow-lg">
              {reason.icon}
            </div>
            <p className="mt-2 font-medium text-sm">{reason.title}</p>
          </div>
        ))}
      </div>

      <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition relative z-10">
        Try Now
      </button>
    </section>
  );
};

export default WhyChooseUs;

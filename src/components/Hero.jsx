import React from "react";
import '../index.css';

const Hero = () => {
  return (
    <section 
      className="text-white min-h-screen flex flex-col justify-center bg-center bg-cover bg-no-repeat bg-[url('./assets/bg3.png')]">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-left md:pl-8">
          Welcome to <span className="text-[#f4ec0b] ">SeekhoCode</span>
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base mb-12 max-w-2xl text-left md:pl-8">
          Are you a BTech 1st or 2nd-year student looking to dive into the world of coding but unsure where to begin? You’ve come to the right place! SeekhoCode is a beginner-friendly community designed to help you learn coding from the ground up. Collaborate with like-minded peers, work on real-world projects, and gain hands-on experience. With step-by-step guidance, carefully curated resources, and expert mentorship, we’re here to help you kickstart your coding journey and set you on the path to success.
        </p>

        {/* Buttons Container */}
        <div className="flex space-x-4 text-left md:pl-8">
          {/* Button 1 */}
          <button className="bg-[#f4ec0b] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#e0d209] hover:scale-105 transition-all duration-300">
            Join Now
          </button>

          {/* Button 2 */}
          <button className="bg-transparent border-2 border-[#f4ec0b] text-[#f4ec0b] px-6 py-2 rounded-lg font-semibold hover:bg-[#f4ec0b] hover:text-black hover:border-transparent hover:scale-105 transition-all duration-300">
            Explore Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
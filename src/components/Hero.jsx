import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray- text-yellow-400 px-6">
      {/* Heading with a black text outline */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg outline-text">
        Welcome to SeekhoCode Community
      </h1>

      {/* Description paragraph */}
      <p className="text-lg md:text-2xl text-gray-900 max-w-2xl mb-6">
        Join a vibrant community of developers, designers, and tech enthusiasts.
        Learn new skills, share your knowledge, and grow your network. Participate
        in exciting hackathons, events, and much more!
      </p>

      {/* Join Button with improved hover effect */}
      <a
        href="#join"
        className="mt-6 bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black hover:text-yellow-400 shadow-md"
      >
        Join Our Community
      </a>
    </section>
  );
};

export default Hero;

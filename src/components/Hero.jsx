import React from "react";

const Hero = () => {
  return (
    <section className=" text-white py-20 p-6 bg-cover bg-center bg-[url('./assets/bg.jpg')]">
      <div className="container mx-auto px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-yellow-400">SeekhoCode</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Are you a BTech 1st or 2nd-year student eager to learn coding but don’t
          know where to start? You’re in the right place! SeekhoCode is a
          beginner-friendly community where you can learn coding from scratch,
          collaborate with peers, and build real-world projects. We provide
          step-by-step guidance, curated resources, and mentorship to help you
          kickstart your coding journey.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
            Join Now
          </button>
          <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
            Explore Resources
          </button>
        </div>

        {/* Discord Invitation */}
        <p className="text-gray-300 text-lg">
          Join our{" "}
          <a
            href="https://discord.gg/your-discord-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 underline hover:text-yellow-500"
          >
            Discord Server
          </a>{" "}
          to connect with fellow students, ask questions, and get support from
          mentors.
        </p>
      </div>
    </section>
  );
};

export default Hero;
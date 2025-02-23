import React, { useState } from "react";
import { FaLinkedin, FaDiscord, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const platforms = [
  { name: "Discord", icon: <FaDiscord />, link: "https://discord.gg/your-discord-link", desc: "Join our Discord server to interact with developers, participate in discussions, and get real-time support." },
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/your-github-link", desc: "Contribute to open-source projects, explore repositories, and collaborate with the community." },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com/your-linkedin-link", desc: "Follow us on LinkedIn for updates, job opportunities, and professional networking." },
  { name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com/your-twitter-link", desc: "Stay updated with the latest news, events, and coding tips by following us on Twitter." },
  { name: "YouTube", icon: <FaYoutube />, link: "https://youtube.com/your-youtube-link", desc: "Watch tutorials, live coding sessions, and community events on our YouTube channel." },
  { name: "Email", icon: <MdEmail />, link: "mailto:your-email@example.com", desc: "Reach out to us via email for inquiries, collaborations, or feedback." }
];

const JoinUs = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Join <span className="text-yellow-400">SeekhoCode</span> Community
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Connect with us on various platforms to stay updated, collaborate, and
          grow your coding skills. Join our vibrant community of developers,
          mentors, and coding enthusiasts!
        </p>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative p-8 rounded-lg border border-yellow-400 text-white transition-all duration-300 group overflow-hidden backdrop-blur-lg bg-white/10"
            >
              {/* Background Glow */}
              <span className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-lg"></span>

              {/* Neon Border Effect */}
              <span className="absolute inset-0 border border-transparent group-hover:border-yellow-400 transition-all duration-300 rounded-lg shadow-lg shadow-yellow-500/30"></span>

              {/* Card Content */}
              <h2 className="text-2xl font-bold mb-4 transition-all duration-300 group-hover:text-yellow-400 flex justify-center items-center">
                {hovered === index ? platform.icon : platform.name}
              </h2>
              <p className="text-gray-300">{platform.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
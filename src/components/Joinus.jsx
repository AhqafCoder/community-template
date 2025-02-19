import React from "react";

const JoinUs = () => {
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
          {/* Discord */}
          <a
            href="https://discord.gg/your-discord-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-4">Discord</h2>
            <p className="text-gray-300">
              Join our Discord server to interact with developers, participate
              in discussions, and get real-time support.
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/your-github-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-4">GitHub</h2>
            <p className="text-gray-300">
              Contribute to open-source projects, explore repositories, and
              collaborate with the community.
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/your-linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-4">LinkedIn</h2>
            <p className="text-gray-300">
              Follow us on LinkedIn for updates, job opportunities, and
              professional networking.
            </p>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/your-twitter-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-4">Twitter</h2>
            <p className="text-gray-300">
              Stay updated with the latest news, events, and coding tips by
              following us on Twitter.
            </p>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/your-youtube-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-4">YouTube</h2>
            <p className="text-gray-300">
              Watch tutorials, live coding sessions, and community events on our
              YouTube channel.
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-4">Email</h2>
            <p className="text-gray-300">
              Reach out to us via email for inquiries, collaborations, or
              feedback.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
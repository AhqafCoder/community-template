import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-6">
      <h1 className="text-5xl font-extrabold text-[#f4ec0b] text-center mb-4 drop-shadow-lg">Get in Touch</h1>
      <p className="text-lg text-white text-center max-w-2xl mb-8">
      Join us in the world of coding competitions and tech challenges. Reach out now!
      </p>
      <div className="bg-yellow-500 p-10 rounded-2xl shadow-2xl max-w-lg w-full border-4 border-yellow-300">
        <h2 className="text-4xl font-extrabold text-white text-center mb-6 drop-shadow-lg">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label className="text-white font-semibold block mb-2">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-yellow-300 text-black placeholder-black focus:outline-none focus:ring-4 focus:ring-white shadow-md"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="text-white font-semibold block mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-yellow-300 text-black placeholder-black focus:outline-none focus:ring-4 focus:ring-white shadow-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="text-white font-semibold block mb-2">Message</label>
            <textarea
              className="w-full p-3 rounded-lg bg-yellow-300 text-black placeholder-black focus:outline-none focus:ring-4 focus:ring-white shadow-md"
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-[#f4ec0b] font-bold p-4 rounded-lg hover:bg-yellow-300 hover:text-white transition transform hover:scale-105 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const events = [
  {
    title: "Hackathon 2025",
    date: "March 15, 2025",
    location: "Online",
    description: "Compete with the best minds in coding and innovation.",
    link: "#",
  },
  {
    title: "AI & ML Bootcamp",
    date: "April 5, 2025",
    location: "New Delhi",
    description: "A hands-on workshop on AI, Machine Learning, and Data Science.",
    link: "#",
  },
  {
    title: "Cyber Security Challenge",
    date: "April 20, 2025",
    location: "Mumbai",
    description: "Test your ethical hacking skills in a thrilling competition.",
    link: "#",
  },
];

const pastEvents = [
  {
    title: "Tech Fest 2024",
    date: "Dec 10, 2024",
    location: "Bangalore",
    description: "A showcase of emerging technologies and startups.",
  },
  {
    title: "Web Dev Sprint",
    date: "Nov 15, 2024",
    location: "Online",
    description: "A 48-hour challenge to build stunning web applications.",
  },
];

const EventPage = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8">
        Upcoming Events 🚀
      </h2>

      {/* Upcoming Events */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-yellow-500 transition">
            <h3 className="text-xl font-bold text-yellow-400">{event.title}</h3>
            <p className="flex items-center mt-2 text-gray-300">
              <FaCalendarAlt className="mr-2" /> {event.date}
            </p>
            <p className="flex items-center mt-1 text-gray-300">
              <FaMapMarkerAlt className="mr-2" /> {event.location}
            </p>
            <p className="mt-3 text-gray-400">{event.description}</p>
            <a
              href={event.link}
              className="mt-4 inline-block bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Register Now
            </a>
          </div>
        ))}
      </div>

      {/* Past Events */}
      <h2 className="text-4xl font-bold text-yellow-400 text-center mt-16 mb-8">
        Past Events 🎉
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {pastEvents.map((event, index) => (
          <div key={index} className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-green-500 transition">
            <h3 className="text-lg font-bold text-green-400">{event.title}</h3>
            <p className="text-gray-300 mt-2">
              <FaCalendarAlt className="inline-block mr-2" /> {event.date} | {event.location}
            </p>
            <p className="text-gray-400 mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventPage;

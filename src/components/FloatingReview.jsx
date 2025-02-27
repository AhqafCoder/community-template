import React, { useState } from "react";

const FloatingReview = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed top-1/3 right-4 z-50 flex flex-col items-end"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Circular Button */}
      <button className="bg-yellow-400 text-black p-4 rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-sm font-bold hover:bg-yellow-500 transition">
        Click Me!
      </button>

      {/* Review Panel (Opens on Hover) */}
      {isOpen && (
        <div className="bg-gray-900 text-white p-4 w-64 rounded-lg shadow-lg mt-2 transition-opacity duration-300">
          <h2 className="text-lg font-bold">Your Review</h2>
          <textarea
            className="w-full p-2 border rounded mt-2 text-black"
            placeholder="Write your feedback..."
          ></textarea>
          <div className="flex justify-end mt-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded mr-2">
              Cancel
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingReview;

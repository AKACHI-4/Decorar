import React from "react";
import { Link } from "react-router-dom";

function ToARRoom() {
  const handleClick = () => {
    window.location.href = "/ar-room";
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-2 md:p-8 md:items-center">
      <div className="flex flex-col justify-between order-2 md:order-1 md:mr-16">
        <div className="text-lg md:text-xl my-1 w-fit px-2 py-1 font-mono border md:border-2 border-gray-500 text-gray-500 border-dashed">
          Real Time Room Visualization
        </div>
        <div className="mb-2 md:mb-4 font-semibold text-4xl md:text-5xl text-gray-400">
          Design your Room in Real Time with Virtual Visualization
        </div>
        <div className="text-gray-400 text-base md:text-lg leading-6 mb-4 md:mb-6 md:pr-4 font-light">
          Immerse yourself in the future of interior design. Use your camera to
          virtually place furniture and decor items in your room, experiencing
          an instant virtual preview.
        </div>
        <button
          onClick={handleClick}
          className="w-32 md:w-40 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-md md:text-lg p-2 text-center mr-2 mb-2"
        >
          Get Started
        </button>
      </div>
      <div className="mx-auto order-1 md:order-2">
        <img
          src="https://i.ibb.co/j3TcP02/01.png"
          alt="right-image"
          className="p-4 max-w-sm md:max-w-lg"
          border="0"
        />
      </div>
    </div>
  );
}

export default ToARRoom;

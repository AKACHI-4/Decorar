import React from "react";

function To2DRoom() {
  const handleClick = () => {
    window.location.href = "/2d-room";
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-10 p-2 md:p-8 md:items-center">
      <div className="flex flex-col justify-between order-2 md:ml-20">
        <div className="text-lg md:text-xl my-1 w-fit px-2 py-1 font-mono border md:border-2 border-gray-500 text-gray-500 border-dashed">
          Precise Room Design
        </div>
        <div className="mb-2 md:mb-4 font-semibold text-4xl md:text-5xl text-gray-400">
          Take the guesswork out of designing your room
        </div>
        <div className="text-gray-400 text-base md:text-lg leading-6 mb-4 md:mb-6 font-light">
          Simplify room planning. Input your room's dimensions, and Virtual-ID
          will generate a precise 2D design for exploring different layouts and
          placements.
        </div>
        <button
          onClick={handleClick}
          className="w-32 md:w-40 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-md md:text-lg p-2 text-center mr-2 mb-2"
        >
          Get Started
        </button>
      </div>
      <div className="mx-auto order-1">
        <img
          src="https://i.ibb.co/Ch7XMt9/02.png"
          alt="left-image"
          className="p-4 max-w-sm md:max-w-lg"
        />
      </div>
    </div>
  );
}

export default To2DRoom;

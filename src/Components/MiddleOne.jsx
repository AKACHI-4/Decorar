import React from "react";
import { TbPointFilled } from "react-icons/tb";
import { BiArrowFromTop } from "react-icons/bi";

function MiddleOne() {
  return (
    <ul className="p-24 md:py-36 flex flex-col md:flex-row gap-6 justify-between bg-transparent">
      <li className="flex gap-3 px-4 py-2 font-normal">
        <TbPointFilled color="red" size={30} className="mt-2" />
        <div>
          <h4 className="font-semibold text-xl text-white">
            Virtual Visualization
          </h4>
          <span className="text-gray-200">Instant AR Room Preview</span>
        </div>
      </li>
      <li className="md:hidden h-20 w-2 bg-white mx-auto"></li>
      <li class="flex gap-3 px-4 py-2">
        <TbPointFilled color="green" size={30} className="mt-2" />
        <div>
          <h4 className="font-semibold text-xl text-white">2D Room Design</h4>
          <span className="text-gray-300">Accurate Layout Generator</span>
        </div>
      </li>
      <li className="md:hidden h-24 w-2 bg-white mx-auto"></li>
      <li class="flex gap-3 px-4 py-2">
        <TbPointFilled color="blue" size={30} className="mt-2" />
        <div>
          <h4 className="font-semibold text-xl text-white">
            Extensive Catalogue
          </h4>
          <span className="text-gray-300">Diverse Furniture Selection</span>
        </div>
      </li>
    </ul>
  );
}

export default MiddleOne;

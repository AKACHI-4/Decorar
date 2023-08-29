import { useState } from "react";
import axios from "axios";
import RoomSim from "./RoomSim";
import ModelSim from "./ModelSim";
// import Bridge from "./Bridge";
// import AccessoryContext from "../../Context/AccessoryContext";

function MainDim() {
  const [roomdim, setRoomdim] = useState({
    len: 0.0,
    wid: 0.0,
    hei: 0.0,
  });
  const [roomopening, setRoomopening] = useState(false);
  const [progressbar, setProgressbar] = useState(0);
  const [selectedAccessory, setSelectedAccessory] = useState(null);

  const handleAccessorySelection = (accessory) => {
    setSelectedAccessory(accessory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRoomdim((prevRoomdim) => ({
      ...prevRoomdim,
      len: e.target.elements[0].value,
      wid: e.target.elements[1].value,
      hei: e.target.elements[2].value,
    }));
    setRoomopening(true);

    let curProgress = 0;
    const interval = setInterval(() => {
      curProgress += 10;
      setProgressbar(curProgress);

      if (curProgress > 100) {
        clearInterval();
        setRoomopening(false);
        setProgressbar(0);
      }
    }, 300);
  };

  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 md:gap-4 py-12 mb-8">
      {/* <AccessoryContext.Provider value={selectedAccessory}> */}
      <div className="w-full md:w-[58%] h-[400px] md:h-[715.5px] bg-blue-100 rounded-md flex flex-col justify-center items-center">
        {/* {roomopening ? (
            <div className="w-full p-10">
              <span className="py-4 text-gray-900 text-xl font-semibold flex justify-center items-center">
                {progressbar}%
              </span>
              <div className="bg-gray-300 h-2 mx-10 mb:mx-20 rounded-lg">
                <div
                  className="bg-indigo-600 h-2 rounded-md"
                  style={{ width: `${progressbar}%` }}
                ></div>
              </div>
            </div>
          ) : roomdim.len && roomdim.wid ? (
            <RoomSim />
          ) : (
            // <div className="z-10 top-0 w-full h-full flex bg-gray-600 bg-opacity-40">
            //   <div className="extraOutline p-3 bg-gray-100 w-max m-auto rounded-lg">
            //     <div className="w-full p-6 relative border-2 border-dashed border-gray-500 rounded-lg">
            //       <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            //         <div className="mb-2 flex-grow w-full sm:w-auto">
            //           <label
            //             htmlFor="length"
            //             className="block mb-1 text-sm font-medium text-gray-900"
            //           >
            //             Length
            //           </label>
            //           <input
            //             className="shadow bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            //             type="number"
            //             id="length"
            //             name="length"
            //             placeholder="Enter length"
            //             required
            //           />
            //         </div>
            //         <div className="mb-2 flex-grow w-full sm:w-auto">
            //           <label
            //             htmlFor="width"
            //             className="block mb-1 text-sm font-medium text-gray-900"
            //           >
            //             Width
            //           </label>
            //           <input
            //             className="shadow bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            //             type="number"
            //             id="width"
            //             name="width"
            //             placeholder="Enter width"
            //             required
            //           />
            //         </div>
            //         <div className="mb-2 flex-grow w-full sm:w-auto">
            //           <label
            //             htmlFor="height"
            //             className="block mb-1 text-sm font-medium text-gray-900"
            //           >
            //             Height
            //           </label>
            //           <input
            //             className="shadow bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            //             type="number"
            //             id="height"
            //             name="height"
            //             placeholder="Enter height"
            //             required
            //           />
            //         </div>
            //         <button
            //           type="submit"
            //           className="text-white h-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base mx-10 px-8 py-3 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            //         >
            //           Set
            //         </button>
            //       </form>
            //     </div>
            //   </div>
            // </div>
          )} */}
        <RoomSim />
      </div>
      <div className="w-full md:w-[30%] h-[715.5px] bg-yellow-100 rounded-lg">
        <ModelSim />
      </div>
      {/* </AccessoryContext.Provider> */}
    </div>
  );
}

export default MainDim;

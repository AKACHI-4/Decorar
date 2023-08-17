import { useState } from "react";

function ArMain() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progressbar, setprogressbar] = useState(0);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(file);
      setUploading(true);

      let curProgress = 0;
      const interval = setInterval(() => {
        curProgress += 10;
        setprogressbar(curProgress);

        if (curProgress > 100) {
          clearInterval();
          setUploading(false);
          setprogressbar(0);
        }
      }, 300);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 py-12 mx-2 mb-8">
      <div className="w-full md:w-[58%] h-[400px] md:h-[700px] bg-blue-100 rounded-md flex flex-col justify-center items-center">
        {uploading ? (
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
        ) : image ? (
          <img
            src={image}
            alt="uploadedImage"
            className="w-full h-full rounded-lg"
          />
        ) : (
          <div class="z-10 top-0 w-full h-full flex bg-gray-600 bg-opacity-40">
            <div class="extraOutline p-3 bg-gray-100 w-max m-auto rounded-lg">
              <div class="file_upload w-full p-6 relative border-2 border-dashed border-gray-500 rounded-lg">
                <svg
                  class="text-indigo-500 w-14 mb:w-20 mx-auto mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <div class="input_field flex flex-col w-full mx-auto px-6 md:px-16 text-center">
                  <label className="block text-indigo-500 text-center cursor-pointer">
                    <input
                      className="text-sm cursor-pointer hidden"
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      required
                    />
                    <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                      Upload Image
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* A kind of x-direction carousel in the case of mobile phone */}
      <div className="w-full md:w-[30%] h-[180px] md:h-[700px] bg-yellow-100 rounded-lg"></div>
    </div>
  );
}

export default ArMain;

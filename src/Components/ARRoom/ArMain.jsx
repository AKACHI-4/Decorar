function ArMain() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 py-12 mx-2 mb-8">
      <div className="w-full md:w-[58%] h-[400px] md:h-[700px] bg-blue-100 rounded-lg flex flex-col justify-center items-center">
        <label class="mb-5 block text-xl font-semibold text-[#07074D]">
          Upload File
        </label>
        <div class="mb-8">
          <input type="file" name="file" id="file" class="sr-only" />
          <label
            for="file"
            class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#5f2424] p-12 text-center"
          >
            <div>
              <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                Drop files here
              </span>
              <span class="mb-2 block text-base font-medium text-[#6B7280]">
                Or
              </span>
              <span class="inline-flex rounded border border-[#804646] py-2 px-7 text-base font-medium text-[#07074D]">
                Browse
              </span>
            </div>
          </label>
        </div>
      </div>
      {/* A kind of x-direction carousel in the case of mobile phone */}
      <div className="w-full md:w-[30%] h-[180px] md:h-[700px] bg-yellow-100 rounded-lg"></div>
    </div>
  );
}

export default ArMain;

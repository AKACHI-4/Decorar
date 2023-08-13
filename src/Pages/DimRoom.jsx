import MainDim from "../Components/DimRoom/MainDim";

function DimRoom() {
  return (
    <div className="mx-auto py-12 flex gap-10 flex-col ">
      <div className="flex justify-center flex-col items-center mb-8">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-6 px-10 md:px-52">
          Bring your vision to life with our <br /> 2D room design tool.
        </h1>
        <p className="text-lg md:text-xl mx-auto px-6 md:px-28 w-fit justify-center text-center font-normal md:font-semibold text-gray-400 ">
          Input your room dimensions, and Virtual-ID will generate a detailed
          layout, <br /> allowing you to experiment with various arrangements of
          room accessories.
        </p>
      </div>
      <MainDim />
    </div>
  );
}

export default DimRoom;

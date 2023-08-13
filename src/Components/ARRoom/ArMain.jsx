function ArMain() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 py-12 mx-2 mb-8">
      <div className="w-full md:w-[58%] h-[400px] md:h-[700px] bg-blue-100 rounded-lg"></div>
      {/* A kind of x-direction carousel in the case of mobile phone */}
      <div className="w-full md:w-[30%] h-[180px] md:h-[700px] bg-yellow-100 rounded-lg"></div>
    </div>
  );
}

export default ArMain;

import HeroSection from "../Components/Hero/HeroSection";
import MiddleOne from "../Components/MiddleOne";
import ToARRoom from "../Components/ToARRoom";
import To2DRoom from "../Components/To2DRoom";
import Scrollbars from "react-custom-scrollbars-2";

function Home() {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      <div>
        <MiddleOne />
      </div>
      <div className="flex flex-col p-2 md:p-20 m-10 space-y-32">
        <ToARRoom />
        <To2DRoom />
      </div>
      {/* Hero-End */}
      <div className="flex justify-center text-center text-sky-400 text-xl md:text-2xl font-bold pt-16 pb-6 font-mono">
        Transform your space with ease. Start designing now!
      </div>
    </>
  );
}

export default Home;

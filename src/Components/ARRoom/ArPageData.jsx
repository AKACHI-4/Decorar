import { RiPlantLine } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { FaTemperatureLow } from "react-icons/fa";
import { FiDroplet } from "react-icons/fi";

function ArPageData() {
  const dataAr = [
    {
      icon: <RiPlantLine size={32} color="green" />,
      desc: "Immerse Yourself in Virtual Design",
    },
    {
      icon: <BsSun size={32} color="orange" />,
      desc: "Personalized Interior Design",
    },
    {
      icon: <FaTemperatureLow size={32} color="red" />,
      desc: "Seamless Room Integration",
    },
    {
      icon: <FiDroplet size={32} color="skyblue" />,
      desc: "Collaborate and Share",
    },
  ];

  return (
    <>
      {dataAr.map((data) => (
        <div className="flex gap-4" key={data.desc}>
          <span>{data.icon}</span>
          <p className="text-base md:text-lg font-semibold">{data.desc}</p>
        </div>
      ))}
    </>
  );
}

export default ArPageData;

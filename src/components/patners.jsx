import CmaCgm from "../assets/patners/cmacgm.svg";
import Maersk from "../assets/patners/maersk.png";
import Pertamina from "../assets/patners/pertamina.png";
import Petronas from "../assets/patners/petronas.png";
import Shell from "../assets/patners/shell.png";

const Patners = () => {
  const patner = [
    {
      id: 1,
      name: "CMA CGM",
      logo: CmaCgm,
    },
    {
      id: 2,
      name: "Maersk",
      logo: Maersk,
    },
    {
      id: 3,
      name: "Pertamina",
      logo: Pertamina,
    },
    {
      id: 4,
      name: "Petronas",
      logo: Petronas,
    },
    {
      id: 5,
      name: "Shell",
      logo: Shell,
    },
  ];
  return (
    <div className="py-20">
      <div className="flex justify-center">
        <span className="text-[#193354] font-bold text-3xl">Our Patners</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-center mt-10 md:px-5">
        {patner.map((patner) => {
          return (
            <div key={patner.id}>
              <img src={patner.logo} alt={patner.name} className="size-30" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Patners;

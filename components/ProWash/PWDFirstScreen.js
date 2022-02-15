import { Build } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proWashNavState } from "../../atoms/proWashNavAtom";
import { proWashCycleState } from "../../atoms/proWashCycleAtom";

const PWDFirstScreen = () => {
  const [menu, setMenu] = useRecoilState(proWashNavState);
  const [cycle, setCycle] = useRecoilState(proWashCycleState);

  return (
    <div className="PWD-FirstScreen text-white p-2 h-full flex flex-col justify-between">
      {/* PWD Header */}
      <div className="flex items-center gap-[2rem]">
        <div
          onClick={() => setMenu("settings")}
          className="flex items-center bg-[#333] p-[1.8rem] rounded-[10px] cursor-pointer transition hover:bg-[#555]"
        >
          <Build style={{ fontSize: "3.2rem" }} />
        </div>
        <div className="flex gap-[2.2rem]">
          <div className="flex items-center gap-[1.8rem] text-[2.15rem]">
            <img className="w-[5rem]" src="/PWD/basket.svg" />
            <h3 className="font-bold">Basket</h3>
          </div>
          <div className="flex items-center gap-[1.8rem] text-[2.15rem] text-[#333]">
            <img className="w-[5.5rem]" src="/PWD/platform.svg" />
            <h3 className="font-bold">Platform</h3>
          </div>
        </div>
      </div>
      {/* PWD Body */}
      <div className="flex gap-4 py-1 flex-1 items-center">
        <div className="flex w-[50%] justify-end">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-[2rem]">Reservoir 1</p>
            <h2 className="text-[3.5rem] font-bold">Okay</h2>
          </div>
          <div className="relative">
            <img className="w-[10rem]" src="/PWD/reservoir.svg" />
            <img
              className="absolute w-[6.4rem] left-[5%] top-[14.5%]"
              src="/PWD/fluid.svg"
            ></img>
            <img
              className="absolute w-[1.3rem] left-[-21%] top-[9%] rotate-180"
              src="/PWD/arrow-left.svg"
            ></img>
            <p className="absolute z-50 text-[6.5rem] font-bold top-[-.7rem] left-[1.75rem]">
              1
            </p>
          </div>
        </div>

        <div className="w-1/2 flex justify-start">
          <div className="relative">
            <img className="w-[10rem]" src="/PWD/reservoir.svg" />
            <img
              className="absolute w-[6.4rem] left-[5%] top-[14.5%]"
              src="/PWD/fluid.svg"
            ></img>
            <img
              className="absolute w-[1.3rem] right-[-21%] top-[9%]"
              src="/PWD/arrow-left.svg"
            ></img>
            <p className="absolute z-50 text-[6.5rem] font-bold top-[-.7rem] left-[1.75rem]">
              2
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-[2rem]">Reservoir 2</p>
            <h2 className="text-[3.5rem] font-bold">Okay</h2>
          </div>
        </div>
      </div>
      {cycle === "multi" ? (
        <div className="pwdIntro__start" onClick={() => setMenu("washing")}>
          <h3 className="text-[2.2rem] bg-[#333] text-center font-bold py-[2rem] rounded-[10px] cursor-pointer transition hover:bg-[#555]">
            Start Wash/Dry (Multi-Cycle)
          </h3>
        </div>
      ) : (
        <div
          className="pwdIntro__start flex gap-x-4"
          onClick={() => setMenu("washing")}
        >
          <h3 className="text-[2.2rem] bg-[#333] text-center font-bold py-[2rem] rounded-[10px] cursor-pointer flex-[0.5] transition hover:bg-[#555]">
            Start Wash/Dry 1
          </h3>
          <h3 className="text-[2.2rem] bg-[#333] text-center font-bold py-[2rem] rounded-[10px] cursor-pointer flex-[0.5] transition hover:bg-[#555]">
            Start Wash/Dry 2
          </h3>
        </div>
      )}
    </div>
  );
};

export default PWDFirstScreen;

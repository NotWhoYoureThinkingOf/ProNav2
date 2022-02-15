import { useRecoilState } from "recoil";
import { proWashNavState } from "../../atoms/proWashNavAtom";
import { proWashCycleState } from "../../atoms/proWashCycleAtom";

const PWDWashing = () => {
  const [menu, setMenu] = useRecoilState(proWashNavState);
  const [cycle, setCycle] = useRecoilState(proWashCycleState);
  return (
    <div className="PWD-FirstScreen text-white p-2 h-full flex flex-col justify-between">
      {/* PWD Body */}
      <div className="flex flex-col gap-4 py-8 px-4 flex-1 items-start justify-between">
        <div className="flex items-center gap-2 w-full">
          <div className="flex-[.2] flex justify-center">
            <img
              className="w-[8rem] text-white"
              src="/PWD/SVG/basket-white.svg"
            />
          </div>

          <p className="font-bold text-4xl flex-[.8]">Platform</p>
        </div>
        <div className="flex items-center gap-2 w-full">
          <div className="flex-[.2] flex justify-center">
            <img className="w-[5.5rem]" src="/PWD/SVG/water-drops.svg" />
          </div>

          <div className="flex flex-col text-4xl flex-[.8]">
            <p className="text-[1.8rem]">Cycle 1</p>
            <p className="font-semibold">Now washing...</p>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full">
          <div className="flex-[.2] flex justify-center">
            <img className="w-[4rem]" src="/PWD/SVG/clock.svg" />
          </div>

          <p className="font-bold text-4xl flex-[.8]">10 minutes remaining</p>
        </div>
      </div>

      <div className="pwdIntro__start" onClick={() => setMenu("main")}>
        <h3 className="text-[2.2rem] bg-[#333] text-center font-bold py-[2rem] rounded-[10px] cursor-pointer transition hover:bg-[#555]">
          Cancel
        </h3>
      </div>
    </div>
  );
};

export default PWDWashing;

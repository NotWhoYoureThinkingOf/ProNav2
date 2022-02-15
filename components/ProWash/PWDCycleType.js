import { useRecoilState } from "recoil";
import { proWashNavState } from "../../atoms/proWashNavAtom";
import { proWashCycleState } from "../../atoms/proWashCycleAtom";
import { ChevronLeft, ChevronRight, Check, Remove } from "@material-ui/icons";

const PWDCycleType = () => {
  const [menu, setMenu] = useRecoilState(proWashNavState);
  const [cycle, setCycle] = useRecoilState(proWashCycleState);

  return (
    <div className="PWD-CycleType text-white p-2 h-full flex flex-col justify-between">
      {/* PWD Header */}
      <div className="flex items-center gap-[2rem]">
        <div
          onClick={() => setMenu("settings")}
          className="flex items-center bg-[#333] p-[.65rem] rounded-[10px] cursor-pointer transition hover:bg-[#555]"
        >
          <ChevronLeft style={{ fontSize: "5.5rem" }} />
        </div>
        <div className="flex gap-[2.2rem] justify-center w-[65%]">
          <div className="flex items-center gap-[1.8rem] text-[2.4rem]">
            <h3 className="font-bold">Set Cycle Type</h3>
          </div>
        </div>
        <div
          onClick={() => setMenu("time")}
          className="flex items-center bg-[#333] p-[.65rem] rounded-[10px] cursor-pointer transition hover:bg-[#555]"
        >
          <ChevronRight style={{ fontSize: "5.5rem" }} />
        </div>
      </div>
      {/* PWD Body */}
      <div className="grid grid-cols-2 gap-5 pt-[1.2rem] pb-[.8rem] flex-1 items-center">
        <div
          className={`pwdCycleBtn ${
            cycle === "multi" && "bg-[#37b34a] border-[#37b34a]"
          }`}
          onClick={() => setCycle("multi")}
        >
          <div className="flex flex-col items-center mb-4">
            <h3 className="text-[2.4rem] font-bold">Multi Cycle Wash</h3>
            <p className="text-[2rem] leading-[1.5rem]">(Recommended)</p>
          </div>

          <div className="mt-[2rem] mb-[1rem] h-[7rem]">
            <p className="text-center text-[2rem] leading-[2.2rem]">
              Automatically wash with solvent from both reservoirs.
            </p>
          </div>
          {cycle === "multi" ? (
            <Check style={{ fontSize: "6rem" }} />
          ) : (
            <Remove style={{ fontSize: "6rem" }} />
          )}
        </div>
        <div
          className={`pwdCycleBtn ${
            cycle === "single" && "bg-[#37b34a] border-[#37b34a]"
          }`}
          onClick={() => setCycle("single")}
        >
          <div className="flex flex-col items-center mb-4">
            <h3 className="text-[2.4rem] font-bold">Single Cycle Wash</h3>
            <p className="text-[2rem] leading-[1.5rem]">(Custom)</p>
          </div>

          <div className="mt-[2rem] mb-[1rem] h-[7rem]">
            <p className="text-center text-[2rem] leading-[2.2rem]">
              Manually select from which reservoir to wash.
            </p>
          </div>

          {cycle === "single" ? (
            <Check style={{ fontSize: "6rem" }} />
          ) : (
            <Remove style={{ fontSize: "6rem" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PWDCycleType;

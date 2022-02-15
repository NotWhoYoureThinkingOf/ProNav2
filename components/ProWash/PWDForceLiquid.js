import { ChevronLeft } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proWashNavState } from "../../atoms/proWashNavAtom";

const PWDForceLiquid = () => {
  const [menu, setMenu] = useRecoilState(proWashNavState);
  return (
    <div className="PWD-ForceLiquid text-white p-2 h-full flex flex-col justify-between">
      <div className="PWD-ForceLiquid-Header flex items-center gap-[2rem]">
        <div
          onClick={() => setMenu("forceDrain")}
          className="flex items-center bg-[#333] p-[.65rem] rounded-[10px] cursor-pointer transition hover:bg-[#555]"
        >
          <ChevronLeft style={{ fontSize: "5.5rem" }} />
        </div>
        <div className="flex gap-[2.2rem] justify-center w-[65%]">
          <div className="flex items-center gap-[1.8rem] text-[2.4rem]">
            <h3 className="font-bold">Select Liquid Type</h3>
          </div>
        </div>
      </div>
      <div className="PWD-ForceLiquid-Body flex py-1 flex-1 items-center justify-center">
        <p className="text-[2rem] text-center w-[85%]">
          Due to sensor constraints, washing with IPA higher than 91% must run
          without automatic safety checks. Select
        </p>
      </div>
      <div className="PWD-ForceLiquid-Start flex justify-around w-full">
        <h3 className="text-[2.2rem]  text-center font-bold py-[2rem] rounded-[10px] cursor-pointer transition">
          IPA 91%
        </h3>
        <h3 className="text-[2.2rem] text-center font-bold py-[2rem] rounded-[10px] cursor-pointer transition">
          Higher than IPA 91%
        </h3>
      </div>
    </div>
  );
};

export default PWDForceLiquid;

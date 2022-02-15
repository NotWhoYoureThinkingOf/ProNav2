import { ChevronLeft } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proWashNavState } from "../../atoms/proWashNavAtom";

const PWDForceDrain = () => {
  const [menu, setMenu] = useRecoilState(proWashNavState);

  return (
    <div className="PWD-ForceDrain text-white p-2 h-full flex flex-col justify-between">
      <div className="PWD-ForceDrain-Header flex items-center gap-[2rem]">
        <div
          onClick={() => setMenu("settings")}
          className="flex items-center bg-[#333] p-[.65rem] rounded-[10px] cursor-pointer transition hover:bg-[#555]"
        >
          <ChevronLeft style={{ fontSize: "5.5rem" }} />
        </div>
        <div className="flex gap-[2.2rem] justify-center w-[65%]">
          <div className="flex items-center gap-[1.8rem] text-[2.4rem]">
            <h3 className="font-bold">Force Drain</h3>
          </div>
        </div>
      </div>
      <div className="PWD-ForceDrain-Body flex flex-1 justify-center items-center">
        <p className="text-3xl text-center w-[85%]">
          This feature allows you to drain the wash chamber if liquid remains in
          the chamber due to an interruption in the cycle. The liquid will drain
          into reservoir 1, so ensure you have adequate space in the reservoir
          before starting.
        </p>
      </div>
      <div
        className="PWD-ForceDrain-Start"
        onClick={() => setMenu("forceLiquid")}
      >
        <h3 className="text-[2.2rem] bg-[#333] text-center font-bold py-[2rem] rounded-[10px] cursor-pointer transition hover:bg-[#555]">
          Start Force Drain
        </h3>
      </div>
    </div>
  );
};

export default PWDForceDrain;

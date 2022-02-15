import { useRecoilState } from "recoil";
import { proWashNavState } from "../../atoms/proWashNavAtom";

const PWDTransferFrom2 = () => {
  const [menu, setMenu] = useRecoilState(proWashNavState);
  return (
    <div className="PWD-Transfer-From-2 text-white p-2 h-full flex flex-col justify-between">
      <div className="PWD-Transfer-From-2-Header flex items-start">
        <div className="flex p-[.65rem] rounded-[10px] flex-[0.15] relative">
          <div className="w-4/5">
            <img src="/PWD/SVG/Asset 4.svg" alt="" className="h-full" />
            <img
              src="/PWD/SVG/Asset 6.svg"
              alt=""
              className="absolute h-[25%] top-[38%] left-[32%]"
            />
          </div>
        </div>
        <div className="flex justify-center flex-[0.85]">
          <div className="flex flex-col text-[2rem] leading-9">
            <h3 className="font-bold pt-[.3rem]">Transfer Liquid</h3>
            <p className="w-4/5">
              Reservoir 1 becomes saturated more quickly. Transferring from 2 to
              1 helps conserve liquid.
            </p>
          </div>
        </div>
      </div>
      <div className="PWD-Transfer-From-2-Body flex items-end h-full py-6 relative">
        <img src="/PWD/SVG/TransferWarning.svg" alt="" />
        <div className="absolute left-1/4 bottom-[24%] leading-9 w-[65%]">
          <p className="font-bold text-[2rem]">Transfer is about to start.</p>
          <p className="text-[2rem]">
            Make sure destination reservoir is fully drained and cleaned.
          </p>
        </div>
      </div>
      <div className="PWD-Transfer-From-2-Buttons flex w-full gap-6">
        <h3
          className="text-[2.2rem] bg-[#333] text-center font-bold py-[2rem] rounded-[10px] cursor-pointer flex-[0.5] transition hover:bg-[#555]"
          onClick={() => setMenu("transfer")}
        >
          Cancel
        </h3>
        <h3 className="text-[2.2rem] bg-[#333] text-center font-bold py-[2rem] rounded-[10px] cursor-pointer flex-[0.5] transition hover:bg-[#555]">
          Start
        </h3>
      </div>
    </div>
  );
};

export default PWDTransferFrom2;

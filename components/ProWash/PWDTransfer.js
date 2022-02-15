import { ChevronLeft } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proWashNavState } from "../../atoms/proWashNavAtom";

const PWDTransfer = () => {
  const [menu, setMenu] = useRecoilState(proWashNavState);
  return (
    <div className="PWD-Transfer text-white p-2 h-full flex flex-col justify-between">
      <div className="PWD-Transfer-Header flex items-center gap-[2rem]">
        <div
          onClick={() => setMenu("settings")}
          className="flex items-center bg-[#333] p-[.65rem] rounded-[10px] cursor-pointer transition hover:bg-[#555]"
        >
          <ChevronLeft style={{ fontSize: "5.5rem" }} />
        </div>
        <div className="flex gap-[2.2rem] justify-center w-[65%]">
          <div className="flex items-center gap-[1.8rem] text-[2.4rem]">
            <h3 className="font-bold">Transfer Liquid</h3>
          </div>
        </div>
      </div>
      <div className="PWD-Transfer-Body grid grid-cols-2 gap-5 pt-[1.2rem] pb-[.8rem] flex-1 items-center">
        <div
          className="PWD-Transfer-Left h-full bg-[#444] flex flex-col items-center justify-center rounded-lg cursor-pointer transition"
          onClick={() => setMenu("transferFrom2")}
        >
          <div className="PWD-Transfer-Left-Container flex flex-col relative items-center gap-6 h-[75%] w-[70%]">
            <div className="w-full h-full">
              <img src="/PWD/SVG/Asset 4.svg" alt="" className="h-full" />
              <img
                src="/PWD/SVG/Asset 6.svg"
                alt=""
                className="absolute h-[25%] top-[22%] left-[37.8%]"
              />
            </div>
            <div className="flex flex-col items-center gap-1 h-2/5">
              <p className="text-[2.3rem] leading-[1.5rem] font-semibold">
                From 2 to 1
              </p>
              <p className="text-[1.8rem] font-semibold">(Recommended)</p>
            </div>
          </div>
        </div>
        <div
          className="PWD-Transfer-Right h-full bg-[#444] flex flex-col justify-center items-center rounded-lg cursor-pointer transition"
          onClick={() => setMenu("transferFrom1")}
        >
          <div className="PWD-Transfer-Right-Container flex flex-col relative items-center gap-6 h-[75%] w-[70%]">
            <div className="w-full h-full">
              <img src="/PWD/SVG/Asset 4.svg" alt="" className="h-full " />
              <img
                src="/PWD/SVG/Asset 6.svg"
                alt=""
                className="absolute h-[25%] top-[22%] left-[34%] rotate-180"
              />
            </div>
            <div className="flex flex-col items-center gap-1 h-2/5">
              <p className="text-[2.3rem] leading-[1.5rem] font-semibold">
                From 1 to 2
              </p>
              <p className="text-[1.8rem] font-semibold">(Optional)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWDTransfer;

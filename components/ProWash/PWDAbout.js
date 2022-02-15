import { ChevronLeft } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proWashNavState } from "../../atoms/proWashNavAtom";

const PWDAbout = () => {
  const [menu, setMenu] = useRecoilState(proWashNavState);
  return (
    <div className="PWD-About text-white p-2 h-full flex flex-col justify-between">
      <div className="PWD-Header flex items-center gap-[2rem]">
        <div
          onClick={() => setMenu("main")}
          className="flex items-center bg-[#333] p-[1.8rem] rounded-[10px] cursor-pointer transition hover:bg-[#555]"
        >
          <ChevronLeft style={{ fontSize: "3.2rem" }} />
        </div>
        <div className="flex gap-[2.2rem] justify-center w-[65%]">
          <div className="flex items-center gap-[1.8rem] text-[2.4rem]">
            <h3 className="font-bold">About</h3>
          </div>
        </div>
      </div>
      <div className="PWD-About-Body flex-1 flex flex-col justify-center items-center gap-8">
        <img className="w-[25rem]" src="/PWD/SVG/sr-logo.svg" />
        <div className="flex flex-col items-center gap-2">
          <p className="text-4xl font-bold">Pro Wash/Dry</p>
          <p className="text-2xl">Firmware Version 2.0</p>
        </div>
      </div>
    </div>
  );
};

export default PWDAbout;

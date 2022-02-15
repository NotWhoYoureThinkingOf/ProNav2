import { useRecoilState } from "recoil";
import { proWashNavState } from "../../atoms/proWashNavAtom";

const PWDHeader = ({ title, Icon, RightIcon }) => {
  const [menu, setMenu] = useRecoilState(proWashNavState);

  return (
    <div className="PWD-Header flex items-center gap-[2rem]">
      <div
        onClick={() => setMenu("profile")}
        className="flex items-center bg-[#333] p-[.65rem] rounded-[10px] cursor-pointer transition hover:bg-[#555]"
      >
        {Icon}
        {/* <ChevronLeft style={{ fontSize: "5.5rem" }} /> */}
      </div>
      <div className="flex gap-[2.2rem] justify-center w-[65%]">
        <div className="flex items-center gap-[1.8rem] text-[2.4rem]">
          <h3 className="font-bold">{title}</h3>
        </div>
      </div>
      <div
        onClick={() => setMenu("time")}
        className="flex items-center bg-[#333] p-[1.65rem] rounded-[10px] cursor-pointer transition hover:bg-[#555]"
      >
        {RightIcon}
      </div>
    </div>
  );
};

export default PWDHeader;

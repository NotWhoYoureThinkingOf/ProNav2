import React from "react";
import { ChevronLeft } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proCure2NavState } from "../../atoms/proCure2NavAtom";

export const PC2ZoneHeader = () => {
  const [menu, setMenu] = useRecoilState(proCure2NavState);
  return (
    <div>
      <div className="PC2-Zone-Header relative flex justify-center items-center mt-5 h-[70px]">
        <div
          className="flex items-center justify-center bg-[#333] h-[74px] w-[74px] rounded-xl cursor-pointer transition hover:bg-[#555] absolute top-0 left-0"
          onClick={() => setMenu("main")}
        >
          <ChevronLeft style={{ fontSize: "5rem" }} />
        </div>
        <div className="flex items-center text-[40px]">
          <h3 className="font-bold">Select Zone</h3>
        </div>
      </div>
    </div>
  );
};

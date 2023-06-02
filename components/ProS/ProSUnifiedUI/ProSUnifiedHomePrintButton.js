import React from "react";
import { useRecoilState } from "recoil";
import { proSScreenState } from "../../../atoms/proSScreenAtom";
import { proSNavState } from "../../../atoms/proSNavAtom";
import { proSUnifiedUIState } from "../../../atoms/proSUnfiedUIState";
import { proSUnifiedNavState } from "../../../atoms/proSUnifiedNavAtom";

export const ProSUnifiedHomePrintButton = () => {
  const [menu, setMenu] = useRecoilState(proSNavState);
  const [screen, setScreen] = useRecoilState(proSScreenState);
  const [unifiedUI, setUnifiedUI] = useRecoilState(proSUnifiedUIState);
  const [unifiedMenu, setUnifiedMenu] = useRecoilState(proSUnifiedNavState);
  return (
    <div
      className="ProS-WIP absolute left-[2%] bg-black border-2 border-white rounded-lg p-8 text-center cursor-pointer"
      onClick={() => setUnifiedMenu("unifiedReadiness")}
    >
      <h3 className="3xl:text-[2.2rem] leading-[3rem] text-white select-none md:text-[1.6rem]">
        Send <br /> Print
      </h3>
    </div>
  );
};

import React from "react";
import { useRecoilState } from "recoil";
import { proSScreenState } from "../../../atoms/proSScreenAtom";
import { proSNavState } from "../../../atoms/proSNavAtom";
import { proSUnifiedUIState } from "../../../atoms/proSUnfiedUIState";
import { proSUnifiedNavState } from "../../../atoms/proSUnifiedNavAtom";

export const ProSHomeChangeUIButton = () => {
  const [menu, setMenu] = useRecoilState(proSNavState);
  const [screen, setScreen] = useRecoilState(proSScreenState);
  const [unifiedMenu, setUnifiedMenu] = useRecoilState(proSUnifiedNavState);
  const [unifiedUI, setUnifiedUI] = useRecoilState(proSUnifiedUIState);
  return (
    <div
      className="ProS-Unified-Button ProS-WIP absolute right-[2%] bg-black border-2 border-white rounded-lg p-8 text-center cursor-pointer"
      onClick={() => {
        setMenu("unifiedPrint");
        setUnifiedUI(true);
        setUnifiedMenu("unifiedPrint");
      }}
    >
      <h3 className="3xl:text-[2.2rem] leading-[3rem] text-white md:text-[1.6rem]">
        Change To <br /> Unified UI <br />
        <span className="text-sm">(Under Construction)</span>
      </h3>
    </div>
  );
};

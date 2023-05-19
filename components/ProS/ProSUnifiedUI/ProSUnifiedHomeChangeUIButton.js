import React from "react";
import { useRecoilState } from "recoil";
import { proSNavState } from "../../../atoms/proSNavAtom";
import { proSUnifiedUIState } from "../../../atoms/proSUnfiedUIState";

export const ProSUnifiedHomeChangeUIButton = () => {
  const [menu, setMenu] = useRecoilState(proSNavState);
  const [unifiedUI, setUnifiedUI] = useRecoilState(proSUnifiedUIState);
  return (
    <div
      className="ProS-Unified-Button ProS-WIP absolute right-[2%] bg-black border-2 border-white rounded-lg p-8 text-center cursor-pointer"
      onClick={() => {
        setUnifiedUI(false);
        setMenu("print");
      }}
    >
      <h3 className="text-[2.2rem] leading-[3rem] text-white">
        Change To <br /> Legacy UI
      </h3>
    </div>
  );
};

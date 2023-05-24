import React from "react";
import { useRecoilState } from "recoil";
import { proSScreenState } from "../../../atoms/proSScreenAtom";
import { proSUnifiedUIState } from "../../../atoms/proSUnfiedUIState";
import { ProSUnifiedNavBar } from "./ProSUnifiedNavBar";
import { proSUnifiedNavState } from "../../../atoms/proSUnifiedNavAtom";
import { ChevronRight } from "@material-ui/icons";

export const ProSUnifiedOption = ({
  title,
  status,
  Icon,
  Enter,
  LeftImage,
  LocalImage,
  MaterialUI,
  image,
}) => {
  return (
    <div className="ProSUnifiedOption flex items-center bg-[#191919] h-[80px] rounded-md text-[26px] pl-6 pr-4 cursor-pointer hover:brightness-125">
      {LeftImage && LocalImage && (
        <div className="mr-4 w-[2rem]">
          <img src={image} />
        </div>
      )}
      {LeftImage && MaterialUI && (
        <div className="mr-4 -translate-x-1">{image}</div>
      )}
      <p className="text-[26px] flex-1">{title}</p>
      <div className="mr-4 opacity-[65%]">{status}</div>
      <div className={Enter && "opacity-[65%]"}>
        {Enter ? <ChevronRight style={{ fontSize: "3.8rem" }} /> : Icon}
      </div>
    </div>
  );
};

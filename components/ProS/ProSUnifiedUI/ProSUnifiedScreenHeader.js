import React from "react";
import { useRecoilState } from "recoil";
import { proSScreenState } from "../../../atoms/proSScreenAtom";
import { proSUnifiedUIState } from "../../../atoms/proSUnfiedUIState";
import { ProSUnifiedNavBar } from "./ProSUnifiedNavBar";
import { proSUnifiedNavState } from "../../../atoms/proSUnifiedNavAtom";
import { ChevronLeft } from "@material-ui/icons";

export const ProSUnifiedScreenHeader = ({ GoBack, title, location }) => {
  const [unifiedMenu, setUnifiedMenu] = useRecoilState(proSUnifiedNavState);
  return (
    <div className="ProSUnifiedScreenHeader relative h-[80px] flex justify-center items-center">
      {GoBack && (
        <div onClick={() => setUnifiedMenu(location)}>
          <ChevronLeft
            style={{
              fontSize: "4rem",
              position: "absolute",
              left: "1rem",
              bottom: ".4rem",
              cursor: "pointer",
            }}
          />
        </div>
      )}
      <h4 className="text-[28px]">{title}</h4>
    </div>
  );
};

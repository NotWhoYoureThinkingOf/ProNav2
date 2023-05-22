import React from "react";
import { useRecoilState } from "recoil";
import { proSScreenState } from "../../../atoms/proSScreenAtom";
import { proSUnifiedUIState } from "../../../atoms/proSUnfiedUIState";
import { ProSUnifiedNavBar } from "./ProSUnifiedNavBar";
import { proSUnifiedNavState } from "../../../atoms/proSUnifiedNavAtom";
import { ChevronLeft, Create } from "@material-ui/icons";

export const ProSUnifiedScreenHeader = ({ GoBack, title, location, Edit }) => {
  const [unifiedMenu, setUnifiedMenu] = useRecoilState(proSUnifiedNavState);
  return (
    <div className="sticky top-0 z-50 bg-black">
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
        {Edit && (
          <div>
            <Create
              style={{
                fontSize: "2.5rem",
                position: "absolute",
                right: "1rem",
                bottom: "1.4rem",
                cursor: "pointer",
              }}
            />
          </div>
        )}
        <h4 className="text-[28px]">{title}</h4>
      </div>
    </div>
  );
};

import { InfoOutlined } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proSUnifiedNavState } from "../../../atoms/proSUnifiedNavAtom";
import React from "react";

export const ProSUnifiedNavBar = () => {
  const [unifiedMenu, setUnifiedMenu] = useRecoilState(proSUnifiedNavState);
  return (
    <div className="w-[160px] flex flex-col">
      <div
        className="py-14 flex justify-center mr-8 cursor-pointer"
        onClick={() => setUnifiedMenu("unifiedPrint")}
      >
        <img
          src="/Home.png"
          alt=""
          style={{
            height: "2.8rem",
            width: "2.8rem",
            objectFit: "contain",
            hover: "color: #fff",
          }}
        />
      </div>
      <div
        className="py-14 flex justify-center mr-8 cursor-pointer"
        onClick={() => setUnifiedMenu("unifiedInformation")}
      >
        <InfoOutlined
          style={{
            height: "3rem",
            width: "3rem",
            objectFit: "contain",
            color: "#666",
          }}
        />
      </div>
      <div
        className="py-14 flex justify-center mr-8 cursor-pointer"
        onClick={() => setUnifiedMenu("unifiedSettings")}
      >
        <img
          src="/settings-icon.png"
          alt=""
          style={{ height: "2.8rem", width: "2.8rem", objectFit: "contain" }}
        />
      </div>
      <div
        className="py-14 flex justify-center mr-8 cursor-pointer"
        onClick={() => setUnifiedMenu("unifiedQueue")}
      >
        <img
          src="/Queue.png"
          alt=""
          style={{ height: "2.8rem", width: "2.8rem", objectFit: "contain" }}
        />
      </div>
      <div
        className="py-14 flex justify-center mr-8 cursor-pointer"
        onClick={() => setUnifiedMenu("unifiedAccount")}
      >
        <img
          src="/User.png"
          alt=""
          style={{ height: "2.8rem", width: "2.8rem", objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

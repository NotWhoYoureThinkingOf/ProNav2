import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  PlayArrow,
  Refresh,
} from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proSScreenState } from "../../atoms/proSScreenAtom";
import { proSResinBrand } from "../../atoms/proSResinBrand";
import resins from "../../public/resins";
import { ProSMaterialBrand } from "./ProSMaterialBrand";

export const ProSMaterialChange = () => {
  const [screen, setScreen] = useRecoilState(proSScreenState);
  const [search, setSearch] = useState("Search all materials");
  const [resinBrand, setResinBrand] = useRecoilState(proSResinBrand);

  //   useEffect(() => {
  //     console.log(resins.filter((brand) => brand.brand.includes(resinBrand)));
  //   }, [resinBrand]);

  return (
    <div className="ProS-Material-Change px-3">
      <div className="ProS-Material-Change-Header relative flex justify-center items-center">
        <div
          className="flex items-center justify-center bg-[#333] h-[106px] w-[112px] rounded-b-xl cursor-pointer transition hover:bg-[#555] absolute top-0 left-0"
          onClick={() => setScreen("material_selection")}
        >
          <ChevronLeft style={{ fontSize: "5rem" }} />
        </div>
        <div className="flex items-center gap-[1.8rem] text-[2.4rem] h-[106px]">
          <h3 className="font-bold">Select Material Brand</h3>
        </div>
        <div className="flex items-center gap-4 absolute top-0 right-0 h-full">
          <p className="text-[18px] text-[#999]">Last Update: 2022-11-29</p>
          <div className="bg-gradient-to-b from-[#2BC25F] to-[#1B7D3D] rounded-lg p-[.75rem] cursor-pointer transition hover:brightness-125">
            <Refresh style={{ fontSize: "2.8rem" }} />
          </div>
        </div>
      </div>
      <div className="ProS-Material-Change-Searchbar-Container flex justify-center pt-16 pb-12">
        <div className="ProS-Material-Change-Searchbar bg-white rounded-lg border-[#2BC25F] border-2 px-4 w-[95%]">
          <div className="ProS-Material-Change-Searchbar-Text flex justify-between items-center py-3">
            <input
              className="text-[#999999] text-[24px] border-0 outline-none"
              type="text"
              placeholder={search}
            />
            <Search style={{ color: "black", fontSize: "2.8rem" }} />
          </div>
        </div>
      </div>
      <div className="ProS-Material-Brand-Layout-Container flex justify-center">
        <div className="ProS-Material-Brand-Layout flex items-center w-[93%] h-[90px]">
          <PlayArrow
            style={{ rotate: "180deg", fontSize: "4rem", cursor: "pointer" }}
          />
          <div className="ProS-Material-Brands relative flex-1 px-2 w-[100%] h-full overflow-x-hidden">
            <div className="flex absolute items-center gap-4 h-full">
              {resins.map((resin) => (
                <div
                  onClick={() => {
                    setResinBrand(resin.brand);
                    setScreen("resin_list");
                  }}
                  key={resin.brand}
                >
                  <ProSMaterialBrand logo={resin.logo} brand={resin.brand} />
                </div>
              ))}
            </div>
          </div>

          <PlayArrow style={{ fontSize: "4rem", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

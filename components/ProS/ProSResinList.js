import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proSScreenState } from "../../atoms/proSScreenAtom";
import { proSResinBrand } from "../../atoms/proSResinBrand";
import { proSSelectedResin } from "../../atoms/proSSelectedResinAtom";
import resins from "../../public/resins";
import { ProSResin } from "./ProSResin";

export const ProSResinList = () => {
  const [screen, setScreen] = useRecoilState(proSScreenState);
  const [selectedResin, setSelectedResin] = useRecoilState(proSSelectedResin);
  const [search, setSearch] = useState("Search all materials");
  const [resinBrand, setResinBrand] = useRecoilState(proSResinBrand);
  const [currentResin, setCurrentResin] = useState(null);

  useEffect(() => {
    setCurrentResin(resins.filter((brand) => brand.brand.includes(resinBrand)));
  }, []);

  // console.log("currentResin", currentResin);

  // console.log("selectedResin", selectedResin);

  return (
    <div className="ProS-Resin-List px-3">
      <div className="ProS-Resin-List-Header relative flex justify-center items-center">
        <div
          className="flex items-center justify-center bg-[#333] h-[106px] w-[112px] rounded-b-xl cursor-pointer transition hover:bg-[#555] absolute top-0 left-0"
          onClick={() => setScreen("material_change")}
        >
          <ChevronLeft style={{ fontSize: "5rem" }} />
        </div>
        <div className="flex items-center gap-[1.8rem] text-[2.4rem] h-[106px]">
          <h3 className="font-bold">{resinBrand} Materials</h3>
        </div>
      </div>
      <div className="ProS-Resin-List-Searchbar-Container flex justify-center pt-16 pb-12">
        <div className="ProS-Resin-List-Searchbar bg-white rounded-lg border-[#2BC25F] border-2 px-4 w-[95%]">
          <div className="ProS-Resin-List-Searchbar-Text flex justify-between items-center py-3">
            <input
              className="text-[#999999] text-[24px] border-0 outline-none"
              type="text"
              placeholder={search}
            />
            <Search style={{ color: "black", fontSize: "2.8rem" }} />
          </div>
        </div>
      </div>
      <div className="ProS-Resin-List-Resins overflow-y-scroll h-[470px] flex justify-center">
        <div className="ProS-Resin-List-Resins-Container flex flex-col gap-2 w-[95%]">
          {currentResin !== null &&
            currentResin[0].resins.map((resin) => (
              <div
                key={resin}
                onClick={() => {
                  setSelectedResin(`${currentResin[0].brand} ${resin}`);
                  setScreen("material_change_confirmation");
                }}
              >
                <ProSResin resinName={resin} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

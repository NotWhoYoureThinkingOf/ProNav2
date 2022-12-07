import React, { useState } from "react";
import { PC2ZoneSelector } from "./PC2ZoneSelector";
import { useRecoilState } from "recoil";
import { proCure2NavState } from "../../atoms/proCure2NavAtom";

export const PC2ZoneSelect = () => {
  const [zone, setZone] = useState("A");
  const [menu, setMenu] = useRecoilState(proCure2NavState);
  return (
    <div className="PC2-Zone-Select w-full">
      <div className="PC2-Zone-Content flex justify-center">
        <div className="PC2-Zone-Content-Container w-full flex flex-col gap-3">
          <div
            className={`PC2-Zone w-full cursor-pointer border-2 ${
              zone === "A"
                ? "border-[#2BC25F] bg-[#28B358] bg-opacity-20"
                : "border-[#8F8F8F]"
            } rounded-lg pl-6 pr-5 py-2`}
            onClick={() => setZone("A")}
          >
            <PC2ZoneSelector
              zone="A"
              time="3:13"
              iconStyle={zone === "A" && "text-[#28B358]"}
            />
          </div>
          <div
            className={`PC2-Zone w-full cursor-pointer border-2 ${
              zone === "CENTER"
                ? "border-[#2BC25F] bg-[#28B358] bg-opacity-20"
                : "border-[#8F8F8F]"
            } rounded-lg pl-6 pr-5 py-2`}
            onClick={() => setZone("CENTER")}
          >
            <PC2ZoneSelector
              zone="CENTER"
              time="2:15"
              iconStyle={zone === "CENTER" && "text-[#28B358]"}
            />
          </div>
          <div
            className={`PC2-Zone w-full cursor-pointer border-2 ${
              zone === "A+B"
                ? "border-[#2BC25F] bg-[#28B358] bg-opacity-20"
                : "border-[#8F8F8F]"
            } rounded-lg pl-6 pr-5 py-2`}
            onClick={() => setZone("A+B")}
          >
            <PC2ZoneSelector
              zone="A+B"
              time="4:15"
              iconStyle={zone === "A+B" && "text-[#28B358]"}
            />
          </div>
          <div className="PC2-Zone-Image flex justify-center pt-5 pb-5">
            {zone === "A" && (
              <img
                src="/SideAOnly.png"
                alt=""
                className="w-[283px] h-[257px]"
              />
            )}
            {zone === "CENTER" && (
              <img
                src="/Ludicrous-Center.png"
                alt=""
                className="w-[283px] h-[257px]"
              />
            )}
            {zone === "A+B" && (
              <img src="/SideA+B.png" alt="" className="w-[283px] h-[257px]" />
            )}
          </div>
          <div
            className="PC2-Zone-Start-Button flex justify-Center items-center bg-gradient-to-b from-[#2BC25F] to-[#28B358] cursor-pointer rounded-lg p-4 relative transition hover:brightness-125"
            onClick={() => setMenu("curing_normal")}
          >
            <h2 className="text-[36px] font-bold text-center w-full">Start</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  HomeOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
  SettingsOutlined,
  Wifi,
} from "@material-ui/icons";
import PC2Header from "../components/ProCure2/PC2Header";
import PC2ResinButton from "../components/ProCure2/PC2ResinButton";
import { useRecoilState } from "recoil";
import { proCure2NavState } from "../atoms/proCure2NavAtom";

const proCure2 = () => {
  const [menu, setMenu] = useRecoilState(proCure2NavState);

  return (
    <div className="ProCure2 font-Roboto relative w-full h-screen overflow-hidden flex justify-center bg-[#111]">
      <div className="absolute bg-black border-white border-4 top-1/2 left-[10%] z-50 rounded-lg text-white p-6">
        <h2 className="text-4xl text-center font-semibold">
          Still Under <br /> Construction
        </h2>
      </div>
      <Link href="/">
        <a className="ProCure2-BackToWelcome absolute z-50 left-2 top-2 text-white">
          Back To Welcome Screen
        </a>
      </Link>
      <div className="ProCure2-Background w-full absolute h-full flex justify-center pointer-events-none">
        <img
          src="/ProCure2.png"
          className="absolute object-contain h-full z-0 filter blur-[10px]"
          alt="ProCure2"
        />
      </div>
      <div className="ProCure2-ScreenCentered h-full w-full flex justify-center items-center">
        {/* Printer Screen */}
        <div className="ProCure2-Screen z-[100] bg-black rounded-lg h-[800px] w-[480px] border-4 border-white overflow-y-scroll relative no-scrollbar px-5">
          {menu === "main" && (
            <div className="Procure2-Container text-white h-full flex flex-col gap-8">
              <div className="ProCure2-Container-Header">
                <PC2Header />
              </div>
              <div className="ProCure2-Container-Body flex flex-col gap-6">
                <div className="ProCure2-Container-Search">
                  <div className="Search-Body bg-white border-2 border-[#28B358] rounded-lg flex items-center justify-between px-4 py-3">
                    <input
                      className="text-[#919B94] text-lg outline-none"
                      placeholder="Search all materials"
                    />
                    <SearchOutlined
                      style={{ fontSize: "2.2rem", color: "black" }}
                    />
                  </div>
                </div>
                <div className="ProCure2-Container-Recent flex flex-col gap-2">
                  <h3 className="text-white opacity-50 text-[.95rem] pl-4">
                    Recently Used
                  </h3>
                  <div className="Recent-Body flex flex-col gap-2">
                    <PC2ResinButton resin="SprintRay Surgical Guide 2" />
                    <PC2ResinButton resin="SprintRay NightGuard Flex" />
                    <PC2ResinButton resin="SprintRay OnX - A1" />
                  </div>
                </div>
                <div className="ProCure2-Container-Materials flex flex-col gap-2">
                  <h3 className="text-white opacity-50 text-[.95rem] pl-4">
                    All Available materials
                  </h3>
                  <div className="Recent-Body flex flex-col gap-2">
                    <PC2ResinButton resin="SprintRay" />
                    <PC2ResinButton resin="Dentca" />
                    <PC2ResinButton resin="Bego" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {menu === "settings" && (
            <div className="Procure2-Container text-white h-full flex flex-col gap-8">
              <div className="ProCure2-Container-Header">
                <PC2Header />
              </div>
            </div>
          )}
          {menu === "wifi" && (
            <div className="Procure2-Container text-white h-full flex flex-col gap-8">
              <div className="ProCure2-Container-Header">
                <PC2Header />
              </div>
            </div>
          )}
          {menu === "account" && (
            <div className="Procure2-Container text-white h-full flex flex-col gap-8">
              <div className="ProCure2-Container-Header">
                <PC2Header />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default proCure2;

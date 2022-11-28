import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import ProSHome from "../components/ProS/ProSHome";
import ProSHeader from "../components/ProS/ProSHeader";
import { useRecoilState } from "recoil";
import { proSNavState } from "../atoms/proSNavAtom";
import { proSScreenState } from "../atoms/proSScreenAtom";
import ProSHistory from "../components/ProS/ProSHistory";
import ProSQueue from "../components/ProS/ProSQueue";
import ProSSettings from "../components/ProS/ProSSettings";
import ProSExternal from "../components/ProS/ProSExternal";
import { ProSNetworkList } from "../components/ProS/ProSNetworkList";

const proS = () => {
  const [menu, setMenu] = useRecoilState(proSNavState);
  const [screen, setScreen] = useRecoilState(proSScreenState);

  return (
    <div className="ProS font-Roboto relative w-full h-screen overflow-hidden flex justify-center bg-[#111]">
      <Head>
        <title>Pro S Printer</title>
      </Head>
      <Link href="/">
        <a className="ProS-BackToWelcome absolute z-50 left-2 top-2 text-white">
          Back To Welcome Screen
        </a>
      </Link>
      <div className="ProS-Background w-full absolute h-full flex justify-center pointer-events-none">
        <img
          src="/ProS.png"
          className="absolute object-contain h-full z-0 filter blur-[10px]"
          alt="ProS"
        />
      </div>
      <div className="ProS-ScreenCentered h-full w-full flex justify-center items-center">
        <div className="ProS-WIP absolute left-[2%] bg-black border-2 border-white rounded-lg p-10 text-center">
          <h3 className="text-[3rem] leading-[3.5rem] text-white">
            Work In <br /> Progress
          </h3>
        </div>
        {/* Printer Screen */}
        {screen === "normal" && (
          <div className="ProS-Screen z-[100] bg-black rounded-2xl h-[799px] w-[1280px] border-4 border-white overflow-hidden relative no-scrollbar scale-75 text-white px-4">
            <ProSHeader />
            <div className="h-[86.5%]">
              {menu === "print" && <ProSHome />}
              {menu === "history" && <ProSHistory />}
              {menu === "queue" && <ProSQueue />}
              {menu === "settings" && <ProSSettings />}
              {menu === "external" && <ProSExternal />}
            </div>
          </div>
        )}
        {screen === "Wifi_List" && (
          <div className="ProS-Screen z-[100] bg-black rounded-2xl h-[799px] w-[1280px] border-4 border-white overflow-hidden relative no-scrollbar scale-75 text-white px-4">
            <ProSNetworkList />
          </div>
        )}
      </div>
    </div>
  );
};

export default proS;

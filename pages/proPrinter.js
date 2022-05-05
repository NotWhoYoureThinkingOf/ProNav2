import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import ProPrinterMain from "../components/ProPrinter/ProPrinterMain";
import ProPrinterNav from "../components/ProPrinter/ProPrinterNav";
import { useRecoilState } from "recoil";
import { proPrinterNavState } from "../atoms/proPrinterNavAtom";
import ProPrinterSettings from "../components/ProPrinter/ProPrinterSettings";
import { proPrinterSettingsNavState } from "../atoms/proPrinterSettingsNavAtom";
import ProPrinterHistory from "../components/ProPrinter/ProPrinterHistory";

const proPrinter = () => {
  const [menu, setMenu] = useRecoilState(proPrinterNavState);
  const [settingsScreen, setSettingsScreen] = useRecoilState(
    proPrinterSettingsNavState
  );

  return (
    <div className="ProPrinter font-Roboto relative w-full h-screen overflow-hidden flex justify-center bg-[#111]">
      <Head>
        <title>Pro Printer</title>
      </Head>
      <Link href="/">
        <a className="ProPrinter-BackToWelcome absolute z-50 left-2 top-2 text-white">
          Back To Welcome Screen
        </a>
      </Link>
      <div className="ProPrinter-Background w-full absolute h-full flex justify-center pointer-events-none">
        <img
          src="/Pro95.png"
          className="absolute object-contain h-full z-0 filter blur-[10px]"
          alt="Pro95"
        />
      </div>
      {/* <h1 className="ProPrinter-DevMessage absolute top-2 z-[999] text-white bg-black w-auto p-5 border-4 rounded-[20px] text-base max-w-[53%] 2xl:text-xl">
        3/1/22: ProWash UI in usable state. Fixed some of the printer menus.
        Still need to update a few more. ProCure not updated yet.
      </h1> */}
      <div className="ProPrinter-Logo absolute top-[85%] z-[91]">
        <img src="" alt="" />
      </div>
      <div className="ProPrinter-PlugInUSB absolute z-[91] right-[10%] top-[35%] border-4 border-white w-[200px] bg-black flex justify-center rounded-[15px] cursor-pointer">
        <img src="" alt="" />
      </div>
      <div className="ProPrinter-SendFromRayware absolute z-[91] left-[8%] top-[40%] border-4 border-white w-[200px] bg-black flex justify-center rounded-[15px] text-white no-underline cursor-pointer">
        <h3 className="p-[50px] text-center text-2xl">
          Send Print
          <br />
          From RayWare
        </h3>
      </div>
      {/* Printer Screen Centered */}
      <div className="ProPrinter-ScreenCentered h-full w-full flex justify-center items-center">
        {/* Printer Screen */}
        <div className="ProPrinter-Screen z-[100] bg-black rounded-2xl h-[550px] w-[800px] border-4 border-white overflow-y-scroll relative no-scrollbar">
          {/* Printer Nav Buttons */}
          {menu === "main" && <ProPrinterNav />}
          {menu === "settings" && settingsScreen === "settings" && (
            <ProPrinterNav />
          )}
          {menu === "history" && <ProPrinterNav />}

          {/* Printer Main Screen Markup (start routing for different menus here) */}
          {menu === "main" && <ProPrinterMain />}
          {menu === "settings" && <ProPrinterSettings />}
          {menu === "history" && <ProPrinterHistory />}
        </div>
      </div>
    </div>
  );
};

export default proPrinter;

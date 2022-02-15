import { useEffect, useState } from "react";
import Link from "next/link";
import ProPrinterMain from "../components/ProPrinter/ProPrinterMain";
import ProPrinterNav from "../components/ProPrinter/ProPrinterNav";
import { useRecoilState } from "recoil";
import { proPrinterNavState } from "../atoms/proPrinterNavAtom";
import ProPrinterSettings from "../components/ProPrinter/ProPrinterSettings";

const proPrinter = () => {
  const [menu, setMenu] = useRecoilState(proPrinterNavState);

  return (
    <div className="font-Roboto relative w-full h-screen overflow-hidden flex justify-center bg-[#111]">
      <Link href="/">
        <a className="absolute z-50 left-2 top-2 text-white">
          Back To Welcome Screen
        </a>
      </Link>
      <div className="w-full absolute h-full flex justify-center pointer-events-none">
        <img
          src="/Pro95.png"
          className="absolute object-contain h-full z-0 filter blur-[10px]"
          alt="Pro95"
        />
      </div>
      <h1 className="absolute top-2 z-[999] text-white bg-black w-auto p-5 border-4 rounded-[20px] text-base max-w-[53%] 2xl:text-xl">
        2/15/22: ProWash UI in usable state. Printer and ProCure need to be
        adjusted due to incompatibility from transfer of old UI code. Will also
        look into adding Pro S and ProCure 2 as time allows.
      </h1>
      <div className="absolute top-[85%] z-[91]">
        <img src="" alt="" />
      </div>
      <a
        href="/proPrinter"
        className="absolute z-[91] right-[10%] top-[35%] border-4 border-white w-[200px] bg-black flex justify-center rounded-[15px]"
      >
        <img src="" alt="" />
      </a>
      <a
        href="/proPrinter"
        className="absolute z-[91] left-[8%] top-[40%] border-4 border-white w-[200px] bg-black flex justify-center rounded-[15px] text-white no-underline"
      >
        <h3 className="p-[50px] text-center text-2xl">
          Send Print
          <br />
          From RayWare
        </h3>
      </a>
      {/* Printer Screen Centered */}
      <div className="h-full w-full flex justify-center items-center">
        {/* Printer Screen */}
        <div className="z-[100] bg-black rounded-2xl h-[550px] w-[800px] border-4 border-white overflow-y-scroll relative no-scrollbar">
          {/* Printer Nav Buttons */}
          <ProPrinterNav />
          {/* Printer Main Screen Markup (start routing for different menus here) */}
          {menu === "main" && <ProPrinterMain />}
          {menu === "settings" && <ProPrinterSettings />}
        </div>
      </div>
    </div>
  );
};

export default proPrinter;

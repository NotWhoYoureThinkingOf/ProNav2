import { useEffect, useState } from "react";
import Link from "next/link";

const proCure2 = () => {
  return (
    <div className="ProCure2 font-Roboto relative w-full h-screen overflow-hidden flex justify-center bg-[#111]">
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
        <div className="ProCure2-Screen z-[100] bg-black rounded-2xl h-[550px] w-[800px] border-4 border-white overflow-y-scroll relative no-scrollbar">
          <div className="text-white flex justify-center items-center h-full text-4xl">
            <h2>Under Construction</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default proCure2;

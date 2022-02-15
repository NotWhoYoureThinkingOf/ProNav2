import { useEffect, useState } from "react";
import Link from "next/link";
import { Build, Repeat } from "@material-ui/icons";

const proCure = () => {
  return (
    <div className="font-Roboto relative w-full h-screen overflow-hidden flex justify-center bg-[#111] text-white">
      <Link href="/">
        <a className="absolute z-50 left-2 top-2">Back To Welcome Screen</a>
      </Link>
      <div className="w-full absolute h-full flex justify-center items-center pointer-events-none">
        <img
          src="/ProCure.png"
          className="absolute object-contain h-4/5 z-0 filter blur-[10px]"
          alt="ProWash"
        />
      </div>
      <div className="prcMain__logo">
        <img src="" alt="" />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="z-[100] bg-black rounded-2xl h-[550px] w-[800px] border-4 border-white overflow-y-scroll relative no-scrollbar">
          <div className="flex flex-col items-center h-full p-[10px] gap-[10px]">
            <div className="prcMain__firstStart flex items-center gap-[.5rem] w-full">
              <Link href="/proCure">
                <a className="w-[15%] bg-[#444] h-full flex justify-center items-center rounded-[10px] transition hover:bg-[#555]">
                  <Build style={{ fontSize: "4rem" }} />
                </a>
              </Link>
              <Link href="/proCure">
                <a className="w-[85%] bg-[#5cb85c] h-full flex items-center justify-center no-underline transition rounded-[10px] py-[2rem] relative hover:bg-[#6ddb6d]">
                  <h2 className="text-[2.5rem] font-bold">Die and Model</h2>
                  <div className="absolute left-[1rem]">
                    <Repeat style={{ fontSize: "4rem" }} />
                  </div>
                </a>
              </Link>
            </div>
            <div className="prcMain__firstButtons grid grid-cols-2 flex-1 w-full gap-[15px]">
              <Link href="/proCure">
                <a className="prcBtn">
                  <h3 className="prcBtnTitle">SprintRay</h3>
                </a>
              </Link>
              <Link href="/proCure">
                <a className="prcBtn">
                  <h3 className="prcBtnTitle">Custom</h3>
                </a>
              </Link>
              <Link href="/proCure">
                <a className="prcBtn">
                  <h3 className="prcBtnTitle">KeyStone</h3>
                </a>
              </Link>
              <Link href="/proCure">
                <a className="prcBtn">
                  <h3 className="prcBtnTitle">DENTCA</h3>
                </a>
              </Link>
              <Link href="/proCure">
                <a className="prcBtn">
                  <h3 className="prcBtnTitle">Dreve</h3>
                </a>
              </Link>
              <Link href="/proCure">
                <a className="prcBtn">
                  <h3 className="prcBtnTitle">NextDent</h3>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default proCure;

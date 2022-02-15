import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MainScreen = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    // mainScreen
    <div className={`PWD-Main h-full ${darkMode && "dark"}`}>
      {/* mainScreen__container */}
      <div className="relative justify-center grid gap-10 p-12 h-full dark:bg-[#111] dark:text-white">
        {/* darkmode toggle */}
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="toggle-switch absolute right-10 top-5"
        >
          <div className="toggle"></div>
        </div>
        {/* mainScreen__containerTop */}
        <div className="text-center space-y-5">
          <h1 className="text-4xl font-bold md:text-[4rem] 2xl:text-8xl">
            Welcome to the Pro Navigation Guide!
          </h1>
          <h2 className="text-xl sm:text-3xl md:text-4xl">
            (Click on the equipment you want to navigate)
          </h2>
        </div>
        {/* mainScreen__containerBottom */}
        <div className="flex justify-center w-full">
          {/* mainScreen__bottomCards */}
          <div className="grid grid-cols-3 h-full space-x-10 max-w-[85%]">
            <Link href="/proPrinter">
              <a className="relative flex items-end">
                <img src="/Pro95.png" alt="" />
              </a>
            </Link>

            <Link href="/proWash">
              <a className="relative flex items-end">
                <img className="object-contain" src="/ProWash.png" alt="" />
              </a>
            </Link>

            <Link href="/proCure">
              <a className="relative flex items-end">
                <img className="object-contain" src="/ProCure.png" alt="" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;

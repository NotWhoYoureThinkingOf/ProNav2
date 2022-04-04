import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MainSlider from "./MainSlider";

const MainScreen = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    // mainScreen
    <div className={`Pro-Main min-h-screen h-full ${darkMode && "dark"}`}>
      {/* mainScreen__container */}
      <div className="Pro-Main-Container relative justify-center grid 4xl:gap-10 p-12 h-full dark:bg-[#111] dark:text-white">
        {/* darkmode toggle */}
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="Pro-Main-Toggle toggle-switch absolute right-10 top-5"
        >
          <div className="toggle"></div>
        </div>
        {/* mainScreen__containerTop */}
        <div className="Pro-Main-Text text-center space-y-5">
          <h1 className="text-4xl font-bold md:text-[4rem] 2xl:text-8xl">
            Welcome to the Pro Navigation Guide!
          </h1>
          <h2 className="sm:text-3xl md:text-4xl lg:text-[1.7rem] lg:font-extralight">
            (If you don't see the product you want to navigate, cycle with the
            arrows.)
          </h2>
        </div>
        {/* mainScreen__containerBottom */}
        <div className="Pro-Main-Bottom-Container flex justify-center w-full h-full max-w-[100vw] max-h-screen">
          {/* mainScreen__bottomCards */}
          {/* <div className="grid grid-cols-4 h-full space-x-10 max-w-[85%]">
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

            <Link href="/proCure2">
              <a className="relative flex items-end">
                <img className="object-contain" src="/ProCure2.png" alt="" />
              </a>
            </Link>
          </div> */}
          <div className="Pro-Main-Slider w-full flex justify-center">
            <MainSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;

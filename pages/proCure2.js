import Link from "next/link";
import Head from "next/head";
import PC2Header from "../components/ProCure2/PC2Header";
import { useRecoilState } from "recoil";
import { proCure2NavState } from "../atoms/proCure2NavAtom";
import PC2Home from "../components/ProCure2/PC2Home";
import PC2Settings from "../components/ProCure2/PC2Settings";
import PC2Wifi from "../components/ProCure2/PC2Wifi";
import PC2Account from "../components/ProCure2/PC2Account";

const proCure2 = () => {
  const [menu, setMenu] = useRecoilState(proCure2NavState);

  return (
    <div className="ProCure2 font-Roboto relative w-full h-screen overflow-hidden flex justify-center bg-[#111]">
      <div className="absolute bg-black border-white border-4 top-1/2 left-[10%] z-50 rounded-lg text-white p-6">
        <h2 className="text-4xl text-center font-semibold">
          Still Under <br /> Construction
        </h2>
      </div>
      <Head>
        <title>ProCure 2</title>
      </Head>
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
              <PC2Home />
            </div>
          )}
          {menu === "settings" && (
            <div className="Procure2-Container text-white h-full flex flex-col gap-8">
              <div className="ProCure2-Container-Header">
                <PC2Header />
              </div>
              <PC2Settings />
            </div>
          )}
          {menu === "wifi" && (
            <div className="Procure2-Container text-white h-full flex flex-col gap-8">
              <div className="ProCure2-Container-Header">
                <PC2Header />
              </div>
              <PC2Wifi />
            </div>
          )}
          {menu === "account" && (
            <div className="Procure2-Container text-white h-full flex flex-col gap-8">
              <div className="ProCure2-Container-Header">
                <PC2Header />
              </div>
              <PC2Account />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default proCure2;

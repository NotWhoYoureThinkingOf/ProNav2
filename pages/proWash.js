import Link from "next/link";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { proWashNavState } from "../atoms/proWashNavAtom";
import { proWashCycleState } from "../atoms/proWashCycleAtom";

import PWDFirstScreen from "../components/ProWash/PWDFirstScreen";
import PWDSettings from "../components/ProWash/PWDSettings";
import PWDCycleType from "../components/ProWash/PWDCycleType";
import PWDSetTime from "../components/ProWash/PWDSetTime";
import PWDForceDrain from "../components/ProWash/PWDForceDrain";
import PWDForceLiquid from "../components/ProWash/PWDForceLiquid";
import PWDTransfer from "../components/ProWash/PWDTransfer";
import PWDTransferFrom2 from "../components/ProWash/PWDTransferFrom2";
import PWDTransferFrom1 from "../components/ProWash/PWDTransferFrom1";
import PWDWashing from "../components/ProWash/PWDWashing";
import PWDAbout from "../components/ProWash/PWDAbout";

const proWash = () => {
  const [menu, setMenu] = useRecoilState(proWashNavState);
  const [cycle, setCycle] = useRecoilState(proWashCycleState);

  console.log("menu state", menu);
  console.log("cycle state", cycle);

  return (
    <div className="PWD font-Roboto relative w-full h-screen overflow-hidden flex justify-center bg-[#111] text-white">
      <Head>
        <title>ProWash</title>
      </Head>
      <Link href="/">
        <a className="absolute z-50 left-2 top-2">Back To Welcome Screen</a>
      </Link>
      <div className="w-full absolute h-full flex justify-center items-center pointer-events-none">
        <img
          src="/ProWash.png"
          className="absolute object-contain h-4/5 z-0 filter blur-[10px]"
          alt="ProWash"
        />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="PWD-Screen-Container z-[100] bg-black rounded-2xl h-[550px] w-[800px] border-4 border-white overflow-y-scroll relative no-scrollbar">
          {menu === "main" && <PWDFirstScreen />}
          {menu === "settings" && <PWDSettings />}
          {menu === "about" && <PWDAbout />}
          {menu === "profile" && <PWDCycleType />}
          {menu === "time" && <PWDSetTime />}
          {menu === "forceDrain" && <PWDForceDrain />}
          {menu === "forceLiquid" && <PWDForceLiquid />}
          {menu === "transfer" && <PWDTransfer />}
          {menu === "transferFrom2" && <PWDTransferFrom2 />}
          {menu === "transferFrom1" && <PWDTransferFrom1 />}
          {menu === "washing" && <PWDWashing />}
        </div>
      </div>
    </div>
  );
};

export default proWash;

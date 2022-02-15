import { useEffect, useState } from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { proPrinterNavState } from "../../atoms/proPrinterNavAtom";

const ProPrinterNav = () => {
  const [menu, setMenu] = useRecoilState(proPrinterNavState);

  return (
    <div className="grid grid-cols-3 overflow-hidden gap-1 sticky top-0 bg-black text-white">
      <Link href="/proPrinter">
        <a>
          <p
            onClick={() => setMenu("main")}
            className="text-[1.2rem] text-center py-5 rounded-lg cursor-pointer bg-[#222] transition hover:bg-[#555]"
          >
            Print
          </p>
        </a>
      </Link>
      <Link href="/proPrinter">
        <a>
          <p
            onClick={() => setMenu("history")}
            className="text-[1.2rem] text-center py-5 rounded-lg cursor-pointer bg-[#222] transition hover:bg-[#555]"
          >
            History
          </p>
        </a>
      </Link>
      <Link href="/proPrinter" className="text-center">
        <a>
          <p
            onClick={() => setMenu("settings")}
            className="text-[1.2rem] text-center py-5 rounded-lg cursor-pointer bg-[#222] transition hover:bg-[#555]"
          >
            Settings
          </p>
        </a>
      </Link>
    </div>
  );
};

export default ProPrinterNav;

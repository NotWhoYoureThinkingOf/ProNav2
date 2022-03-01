import { useRecoilState } from "recoil";
import { proPrinterNavState } from "../../atoms/proPrinterNavAtom";

const ProPrinterNav = () => {
  const [menu, setMenu] = useRecoilState(proPrinterNavState);

  return (
    <div className="grid grid-cols-3 overflow-hidden gap-1 sticky top-0 bg-black text-white">
      <div>
        <p
          onClick={() => setMenu("main")}
          className="text-[1.2rem] text-center py-5 rounded-lg cursor-pointer bg-[#222] transition hover:bg-[#555]"
        >
          Print
        </p>
      </div>
      <div>
        <p
          onClick={() => setMenu("history")}
          className="text-[1.2rem] text-center py-5 rounded-lg cursor-pointer bg-[#222] transition hover:bg-[#555]"
        >
          History
        </p>
      </div>
      <div>
        <p
          onClick={() => setMenu("settings")}
          className="text-[1.2rem] text-center py-5 rounded-lg cursor-pointer bg-[#222] transition hover:bg-[#555]"
        >
          Settings
        </p>
      </div>
    </div>
  );
};

export default ProPrinterNav;

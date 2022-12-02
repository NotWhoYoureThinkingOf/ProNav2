import { useRecoilState } from "recoil";
import { proSNavState } from "../../atoms/proSNavAtom";

const ProSHeader = () => {
  const [menu, setMenu] = useRecoilState(proSNavState);

  return (
    <div className="ProS-Header flex gap-4">
      <div
        className={`bg-gradient-to-b ${
          menu === "print"
            ? "from-[#2BC25F] to-[#1B7D3D]"
            : "from-[#6B6A6A] to-[#3D3D3D]"
        } h-[106px] w-[405px] rounded-b-2xl flex justify-center items-center cursor-pointer transition hover:brightness-125`}
        onClick={() => setMenu("print")}
      >
        <p className="text-[40px] font-bold">Print</p>
      </div>
      {/* <div className="bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] h-[106px] w-[405px] text-[40px] font-bold rounded-b-2xl flex justify-center items-center cursor-pointer transition hover:brightness-125" onClick={() => setMenu("queue")}>
        <p>Queue</p>
      </div> */}
      <div
        className={`bg-gradient-to-b ${
          menu === "history"
            ? "from-[#2BC25F] to-[#1B7D3D]"
            : "from-[#6B6A6A] to-[#3D3D3D]"
        } h-[106px] w-[405px] rounded-b-2xl flex justify-center items-center cursor-pointer transition hover:brightness-125`}
        onClick={() => setMenu("history")}
      >
        <p className="text-[40px] font-bold">History</p>
      </div>
      <div
        className={`bg-gradient-to-b ${
          menu === "settings"
            ? "from-[#2BC25F] to-[#1B7D3D]"
            : "from-[#6B6A6A] to-[#3D3D3D]"
        } h-[106px] w-[405px] rounded-b-2xl flex justify-center items-center cursor-pointer transition hover:brightness-125`}
        onClick={() => setMenu("settings")}
      >
        <p className="text-[40px] font-bold">Settings</p>
      </div>
    </div>
  );
};

export default ProSHeader;

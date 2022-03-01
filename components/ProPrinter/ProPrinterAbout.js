import { ChevronRight, ChevronLeft } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proPrinterSettingsNavState } from "../../atoms/proPrinterSettingsNavAtom";

const ProPrinterAbout = () => {
  const [settingsScreen, setSettingsScreen] = useRecoilState(
    proPrinterSettingsNavState
  );

  console.log("settingsScreen", settingsScreen);

  return (
    <div className="ProPrinter-About">
      <div className="ProPrinter-About__header relative bg-[#333] text-white py-[20px] flex justify-center items-center text-[1.4rem] font-normal">
        <div
          className="ProPrinter-About__back absolute left-[2%] flex items-center text-white no-underline cursor-pointer"
          onClick={() => setSettingsScreen("settings")}
        >
          <ChevronLeft />
          <p className="ml-[10px] font-medium text-[1.1rem]">Back</p>
        </div>
        <h2>About Printer</h2>
      </div>
      <div className="ProPrinter-About__container h-full flex flex-col items-center">
        <div className="ProPrinter-About__details w-[83%] flex flex-col items-center pt-[30px]">
          <div className="ProPrinter-About__detail text-white flex w-full justify-between border-b-[rgba(255,255,255,0.4)] py-[20px] text-[1.2rem] font-bold">
            <p>Printer Model</p>
            <p>PRO95</p>
          </div>
          <div className="ProPrinter-About__detail text-white flex w-full justify-between border-b-[rgba(255,255,255,0.4)] py-[20px] text-[1.2rem] font-bold">
            <p>Printer Serial</p>
            <p>P95-12A3B45C</p>
          </div>
          <div className="ProPrinter-About__detail text-white flex w-full justify-between border-b-[rgba(255,255,255,0.4)] py-[20px] text-[1.2rem] font-bold">
            <p>Printer Nickname</p>
            <div className="ProPrinter-About__nickname flex items-center justify-between">
              <p>Nickname</p>
              <ChevronRight />
            </div>
          </div>
          <div className="ProPrinter-About__detail text-white flex w-full justify-between border-b-[rgba(255,255,255,0.4)] py-[20px] text-[1.2rem] font-bold">
            <p>Wifi Network</p>
            <p>Network Name</p>
          </div>
          <div className="ProPrinter-About__detail text-white flex w-full justify-between border-b-[rgba(255,255,255,0.4)] py-[20px] text-[1.2rem] font-bold">
            <p>IP Address</p>
            <p>192.168.1.111</p>
          </div>
          <div className="ProPrinter-About__detail text-white flex w-full justify-between py-[20px] text-[1.2rem] font-bold">
            <p>PrintOS Version</p>
            <p>6.51</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProPrinterAbout;

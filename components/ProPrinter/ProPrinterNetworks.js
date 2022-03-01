import {
  ChevronRight,
  ChevronLeft,
  SignalWifi0Bar,
  SignalWifi4Bar,
  SignalWifi3Bar,
  SignalWifi2Bar,
  SignalWifi1Bar,
} from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proPrinterSettingsNavState } from "../../atoms/proPrinterSettingsNavAtom";
import ProPrinterNetwork from "./ProPrinterNetwork";
import ProPrinterNetworkList from "./ProPrinterNetworkList";

const ProPrinterNetworks = () => {
  const [settingsScreen, setSettingsScreen] = useRecoilState(
    proPrinterSettingsNavState
  );

  console.log("settingsScreen", settingsScreen);

  return (
    <div className="ProPrinter-Networks">
      <div className="ProPrinter-Networks__header sticky top-0 bg-[#333] text-white py-[20px] flex justify-center items-center text-[1.4rem] font-normal">
        <div
          className="ProPrinter-Networks__back absolute left-[2%] flex items-center text-white no-underline cursor-pointer"
          onClick={() => setSettingsScreen("settings")}
        >
          <ChevronLeft />
          <p className="ml-[10px] font-medium text-[1.1rem]">Back</p>
        </div>
        <h2>Select Wireless Network</h2>
      </div>
      <div className="ProPrinter-Networks__details flex flex-col items-center w-full">
        <div className="ProPrinter-Networks__networks w-[83%] py-[30px]">
          <ProPrinterNetworkList />
        </div>
      </div>
    </div>
  );
};

export default ProPrinterNetworks;

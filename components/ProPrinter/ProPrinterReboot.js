import { Check, ChevronLeft, Close } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proPrinterSettingsNavState } from "../../atoms/proPrinterSettingsNavAtom";
import { proPrinterNavState } from "../../atoms/proPrinterNavAtom";

const ProPrinterReboot = () => {
  const [settingsScreen, setSettingsScreen] = useRecoilState(
    proPrinterSettingsNavState
  );
  const [menu, setMenu] = useRecoilState(proPrinterNavState);

  const rebootPrinter = () => {
    setSettingsScreen("settings");
    setMenu("main");
  };

  console.log("settingsScreen", settingsScreen);

  return (
    <div className="ProPrinter-Reboot flex flex-col h-full relative">
      <div className="ProPrinter-Reboot__header relative bg-[#333] text-white py-[20px] flex justify-center items-center text-[1.4rem] font-normal">
        <div
          className="ProPrinter-Reboot__back absolute left-[2%] flex items-center text-white no-underline cursor-pointer"
          onClick={() => setSettingsScreen("settings")}
        >
          <ChevronLeft />
          <p className="ml-[10px] font-medium text-[1.1rem]">Back</p>
        </div>
        <h2>Reboot Printer Confirmation</h2>
      </div>
      <div className="ProPrinter-Reboot__container flex-1 flex items-center justify-center">
        <h3 className="text-3xl font-bold">
          Are you sure you want to reboot the printer?
        </h3>
      </div>
      <div className="ProPrinter-Reboot__buttons w-full text-white flex justify-center text-[1.3rem] font-normal gap-1">
        <div
          className="flex-[0.5] flex items-center justify-center bg-[#333] h-full gap-4 py-6 cursor-pointer transition hover:bg-[#444]"
          onClick={() => rebootPrinter()}
        >
          <Check style={{ color: "rgb(23,255,81)", transform: "scale(1.5)" }} />
          <p className="font-bold">Reboot Now</p>
        </div>
        <div
          className="flex-[0.5] flex items-center justify-center bg-[#333] h-full gap-4 py-6 cursor-pointer transition hover:bg-[#444]"
          onClick={() => setSettingsScreen("settings")}
        >
          <Close style={{ color: "red", transform: "scale(1.5)" }} />
          <p className="font-bold">Do Not Reboot</p>
        </div>
      </div>
    </div>
  );
};

export default ProPrinterReboot;

import { ChevronLeft } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proPrinterSettingsNavState } from "../../atoms/proPrinterSettingsNavAtom";

const ProPrinterLanguage = () => {
  const [settingsScreen, setSettingsScreen] = useRecoilState(
    proPrinterSettingsNavState
  );

  console.log("settingsScreen", settingsScreen);

  return (
    <div className="ProPrinter-Language">
      <div className="ProPrinter-Language__header relative bg-[#333] text-white py-[20px] flex justify-center items-center text-[1.4rem] font-normal">
        <div
          className="ProPrinter-Language__back absolute left-[2%] flex items-center text-white no-underline cursor-pointer"
          onClick={() => setSettingsScreen("settings")}
        >
          <ChevronLeft />
          <p className="ml-[10px] font-medium text-[1.1rem]">Back</p>
        </div>
        <h2>System Language</h2>
      </div>
      <div className="ProPrinter-Language__container h-full flex flex-col items-center">
        <div className="ProPrinter-Language__details w-[83%] flex flex-col pt-[20px] text-[1.3rem] leading-6 font-bold">
          <h2
            className="mt-[2rem] mb-[1rem] cursor-pointer"
            onClick={() => setSettingsScreen("settings")}
          >
            English
          </h2>
          <h2 className="mt-[2rem] mb-[1rem]">
            中国人{" "}
            <span className="font-normal text-[1rem]">
              (Not available in this app)
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProPrinterLanguage;

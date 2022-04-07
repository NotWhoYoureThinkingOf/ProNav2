import { ChevronLeft } from "@material-ui/icons";
import React from "react";
import PC2LanguageButton from "./PC2LanguageButton";
import { useRecoilState } from "recoil";
import { proCure2LanguageScreenState } from "../../atoms/proCure2LanguageScreenAtom";

const PC2LangaugeScreen = () => {
  const [languageScreen, setLanguageScreen] = useRecoilState(
    proCure2LanguageScreenState
  );

  return (
    <div className="ProCure2-Language-Screen">
      <div className="ProCure2-Language-Container -mt-2 flex flex-col">
        <div className="ProCure2-Language-Header flex items-center gap-12">
          <div
            className="flex items-center justify-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] h-[78px] w-[78px] rounded-lg cursor-pointer transition hover:brightness-125"
            onClick={() => setLanguageScreen(false)}
          >
            <ChevronLeft style={{ fontSize: "4rem" }} />
          </div>

          <h2 className="text-[28px]">Select Language</h2>
        </div>
        <div className="ProCure2-Languages flex flex-col mt-6 gap-2">
          <PC2LanguageButton language="Deutsch (N/A)" />
          <PC2LanguageButton language="English" />
          <PC2LanguageButton language="中国人 (N/A)" />
          <PC2LanguageButton language="Español (N/A)" />
          <PC2LanguageButton language="Français (N/A)" />
          <PC2LanguageButton language="Italiana (N/A)" />
        </div>
        <div className="ProCure2-Confirm">
          <div
            className={`flex justify-center items-center bg-gradient-to-b from-[#2BC25F] to-[#1B7D3D]  cursor-pointer rounded-lg h-[78px] relative transition mt-[3.65rem] hover:brightness-125`}
            onClick={() => setLanguageScreen(false)}
          >
            <h2 className="text-2xl font-semibold">Confirm</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PC2LangaugeScreen;

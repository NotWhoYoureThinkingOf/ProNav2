import { Check, ChevronRight } from "@material-ui/icons";
import React from "react";

const PC2LanguageButton = ({ language }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        language !== "English"
          ? "bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D]"
          : "bg-[#212121]"
      } cursor-pointer rounded-lg h-[78px] relative transition hover:brightness-125`}
    >
      <h2 className="text-2xl font-semibold">{language}</h2>
      {language === "English" && (
        <div className="bg-[#28B358] absolute rounded-full right-[4%] h-[28px] w-[28px] flex justify-center items-center">
          <Check style={{ fontSize: "1.25rem" }} />
        </div>
      )}
    </div>
  );
};

export default PC2LanguageButton;

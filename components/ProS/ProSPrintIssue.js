import React from "react";
import { ChevronLeft } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proSNavState } from "../../atoms/proSNavAtom";
import { proSIssueState } from "../../atoms/proSIssueAtom";

export const ProSPrintIssue = () => {
  const [menu, setMenu] = useRecoilState(proSNavState);
  const [issue, setIssue] = useRecoilState(proSIssueState);
  return (
    <div className="ProS-Print-Issue h-full">
      <div className="ProS-Print-Issue-Header relative flex justify-center items-center">
        <div
          className="flex items-center justify-center bg-[#333] h-[106px] w-[112px] rounded-b-xl cursor-pointer transition hover:bg-[#555] absolute top-0 left-0"
          onClick={() => setMenu("negative")}
        >
          <ChevronLeft style={{ fontSize: "5rem" }} />
        </div>
      </div>
      <div className="ProS-Print-Issue-Content h-full flex justify-center">
        <div className="ProS-Print-Issue-Content-Container flex flex-col gap-8 items-center mt-28 w-[80%]">
          <h3 className="text-[40px] font-bold">
            {issue === "no-stick" && "Nothing Stuck to Build Platform"}
            {issue === "some-stick" &&
              "Only Some Parts Stuck to Build Platform"}
            {issue === "distorted" && "Print Object is Distorted"}
            {issue === "other" && "Other Issue"}
          </h3>
          <div className="ProS-Print-Issue-Instructions flex flex-col gap-10 w-[90%]">
            <p className="text-[#BABABA] text-[24px] text-center">
              {issue === "no-stick" &&
                "Gently stir the resin tank to check if there is anything stuck to the bottom. Gently remove debris with your gloved hand or a paper card. Don't Use anyhting sharp."}
              {issue === "some-stick" &&
                "Gently stir the resin tank to check if there is anything stuck to the bottom. Gently remove debris with your gloved hand or a paper card. Don't Use anyhting sharp."}
              {issue === "distorted" &&
                "If your print is distorted and/or misshapen, this could be a sign that there is interference along the optical path between the projector and resin tank."}
            </p>
            {issue === "no-stick" && (
              <div className="flex items-center gap-6">
                <img src="/warning-sign.png" alt="" />
                <p className="text-[24px]">
                  If your print with debris stuck to the tank, you may damage
                  your printer
                </p>
              </div>
            )}
          </div>
          <div className="ProS-Print-Issue-Scan flex items-center gap-10 mt-10">
            <img
              src="/materials-qr-code.png"
              alt=""
              className="w-[200px] h-[200px]"
            />
            <div className="ProS-Print-Issue-Scan-Instructions flex flex-col gap-2 text-[24px]">
              <p className="font-bold">Scan to Learn</p>
              <p>
                For further instruction, scan this QR code with your smartphone
                to
                <br />
                find the IFU for your chosen resin type.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ProS-Print-Issue-Scan-Buttons flex justify-center">
        <div className="ProS-Print-Issue-Scan-Button-Container flex gap-6 w-[95%]">
          <div className="ProS-Nickname-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer flex-[.5] transition hover:brightness-125">
            <p className="text-[24px]">Contact Support</p>
          </div>
          <div
            className="ProS-Nickname-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer flex-[.5] transition hover:brightness-125"
            onClick={() => setMenu("print")}
          >
            <p className="text-[24px]">Finish</p>
          </div>
        </div>
      </div>
    </div>
  );
};

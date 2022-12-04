import React from "react";
import { ChevronLeft } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proSNavState } from "../../atoms/proSNavAtom";
import { proSIssueState } from "../../atoms/proSIssueAtom";
import { ProSPrintNegativeButton } from "./ProSPrintNegativeButton";

export const ProSPrintNegative = () => {
  const [menu, setMenu] = useRecoilState(proSNavState);
  const [issue, setIssue] = useRecoilState(proSIssueState);
  return (
    <div className="ProS-Print-Negative h-full">
      <div className="ProS-Print-Negative-Header relative flex justify-center items-center">
        <div
          className="flex items-center justify-center bg-[#333] h-[106px] w-[112px] rounded-b-xl cursor-pointer transition hover:bg-[#555] absolute top-0 left-0"
          onClick={() => setMenu("complete")}
        >
          <ChevronLeft style={{ fontSize: "5rem" }} />
        </div>
      </div>
      <div className="ProS-Print-Negative-Content flex flex-col items-center justify-center h-full gap-20">
        <div className="ProS-Print-Negative-Text">
          <h3 className="text-[64px] font-bold">We're Sorry to Hear That</h3>
          <p className="text-[24px] text-[#777] text-center">
            Which of the following best describes the print results?
          </p>
        </div>
        <div className="ProS-Print-Negative-Buttons flex flex-col gap-2 w-[85%]">
          <div
            className=""
            onClick={() => {
              setMenu("issue");
              setIssue("no-stick");
            }}
          >
            <ProSPrintNegativeButton issue="Nothing Stuck to Build Platform" />
          </div>
          <div
            className=""
            onClick={() => {
              setMenu("issue");
              setIssue("some-stick");
            }}
          >
            <ProSPrintNegativeButton issue="Only Some Parts Stuck to Build Platform" />
          </div>
          <div
            className=""
            onClick={() => {
              setMenu("issue");
              setIssue("distorted");
            }}
          >
            <ProSPrintNegativeButton issue="Printed Object is Distorted" />
          </div>
          <div
            className=""
            onClick={() => {
              setMenu("issue");
              setIssue("other");
            }}
          >
            <ProSPrintNegativeButton issue="Other issue" />
          </div>
        </div>
      </div>
    </div>
  );
};

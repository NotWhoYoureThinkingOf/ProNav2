import { Delete } from "@material-ui/icons";
import React from "react";
import ProPrinterNav from "./ProPrinterNav";

const ProPrinterHistory = () => {
  return (
    <div className="ProPrinter-History text-white flex flex-col items-center h-[87%] relative">
      <div className="ProPrinter-History-body flex-1 flex items-center">
        <h2 className="text-[2.5rem] font-bold">No Recent Prints</h2>
      </div>
      <div className="ProPrinter-History-button flex justify-center items-center bg-[#333] w-full transition cursor-pointer py-5 gap-2 hover:bg-[#444]">
        <Delete style={{ fontSize: "2rem" }} />
        <p className="text-xl font-medium">Clear All</p>
      </div>
    </div>
  );
};

export default ProPrinterHistory;

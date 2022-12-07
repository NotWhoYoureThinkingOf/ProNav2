import { ThumbUp } from "@material-ui/icons";
import React from "react";

export const PC2CuringComplete = () => {
  return (
    <div className="PC2-Curing-Complete flex justify-center">
      <div className="PC2-Curing-Complete-Container">
        <div className="PC2-Curing-Complete-Brand text-center mt-[4.5rem]">
          <p className="text-[24px]">BRAND NAME</p>
          <p className="text-[40px] font-bold">Material Name</p>
        </div>
        <div className="PC2-Curing-Complete-Time flex flex-col items-center mt-36">
          <ThumbUp style={{ fontSize: "7rem", color: "#28B358" }} />
          <p className="text-[40px] text-center font-bold leading-[3rem] mt-2">
            Post Curing
            <br />
            Complete
          </p>
        </div>
        <div className="PC2-Curing-Complete-Status flex flex-col items-center mt-24 gap-12">
          <div className="text-[24px] text-center">
            Open drawer and remove
            <br />
            appliances to continue.
          </div>
        </div>
      </div>
    </div>
  );
};

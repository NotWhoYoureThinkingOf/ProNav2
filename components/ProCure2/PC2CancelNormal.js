import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { proCure2NavState } from "../../atoms/proCure2NavAtom";

export const PC2CancelNormal = () => {
  const [menu, setMenu] = useRecoilState(proCure2NavState);
  const [canceled, setCanceled] = useState(false);
  return (
    <div className="PC2-Cancel-Normal flex justify-center">
      <div className="PC2-Cancel-Normal-Container">
        <div className="PC2-Cancel-Normal-Confirm flex flex-col items-center gap-12 mt-52">
          <img
            src="/PC2-Warning.png"
            alt=""
            className="w-[118.5px] h-[118.5px]"
          />
          <p className="text-2xl">
            {canceled ? "" : "Post-curing in progress"}
          </p>
          <p
            className={`text-4xl font-bold text-center w-full ${
              canceled && "w-3/4 mt-8"
            }`}
          >
            {canceled
              ? "Post Curing Canceled"
              : "Are you sure you want to cancel post curing?"}
          </p>
          {canceled && (
            <p className="text-[24px] mt-4">
              Open drawer and remove appliances
            </p>
          )}
        </div>
        <div
          className={`PC2-Cancel-Normal-Buttons flex gap-4 ${
            canceled ? "mt-14" : "mt-40"
          }`}
        >
          {canceled ? (
            <div
              className="flex justify-center items-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] cursor-pointer rounded-lg px-4 py-3 flex-1 relative transition hover:brightness-125"
              onClick={() => setMenu("main")}
            >
              <h2 className="text-[36px] font-bold">Home</h2>
            </div>
          ) : (
            <div className="flex gap-4 w-full">
              <div
                className="flex justify-center items-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] cursor-pointer rounded-lg px-4 py-3 flex-[.5] relative transition hover:brightness-125"
                onClick={() => setMenu("curing_normal")}
              >
                <h2 className="text-[36px] font-bold">No</h2>
              </div>
              <div
                className="flex justify-center items-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] cursor-pointer rounded-lg px-4 py-3 flex-[.5] relative transition hover:brightness-125"
                onClick={() => setCanceled(!canceled)}
              >
                <h2 className="text-[36px] font-bold">Yes</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

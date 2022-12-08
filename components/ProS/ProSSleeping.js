import React from "react";
import { useRecoilState } from "recoil";
import { proSNavState } from "../../atoms/proSNavAtom";

export const ProSSleeping = () => {
  const [menu, setMenu] = useRecoilState(proSNavState);
  return (
    <div
      className="ProS-Sleeping flex justify-center items-center h-[50rem] cursor-pointer"
      onClick={() => setMenu("wake")}
    >
      <div className="ProS-Sleeping-Container flex flex-col gap-6">
        <div className="ProS-Sleeping-Printer relative flex justify-center">
          <img
            src="/pros-printer-sleep.png"
            alt=""
            className="w-[135px] h-[174.99px]"
          />
          <img
            src="/pros-printer-sleep-z.png"
            alt=""
            className="w-[98.08px] h-[71.33px] absolute top-[-1rem] right-10"
          />
        </div>
        <p className="opacity-50 text-center text-[24px]">
          SprintRay Pro S is sleeping.
          <br />
          Tap the screen to wake it up.
        </p>
      </div>
    </div>
  );
};

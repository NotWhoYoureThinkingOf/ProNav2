import { ChevronLeft } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { proSNavState } from "../../atoms/proSNavAtom";
import { proSNicknameState } from "../../atoms/proSNicknameState";

export const ProSNickname = () => {
  const [menu, setMenu] = useRecoilState(proSNavState);
  const [nickname, setNickname] = useRecoilState(proSNicknameState);
  const [input, setInput] = useState("");
  useEffect(() => {
    setNickname(input);
  }, input);

  return (
    <div className="ProS-Nickname">
      <div className="ProS-Nickname-Header relative flex justify-center items-center">
        <div
          className="flex items-center justify-center bg-[#333] h-[106px] w-[112px] rounded-b-xl cursor-pointer transition hover:bg-[#555] absolute top-0 left-0"
          onClick={() => setMenu("settings")}
        >
          <ChevronLeft style={{ fontSize: "5rem" }} />
        </div>
        <div className="flex items-center gap-[1.8rem] text-[2.4rem] h-[106px]">
          <h3 className="font-bold">Printer Nickname</h3>
        </div>
      </div>
      <div className="ProS-Nickname-Content text-[24px] flex flex-col items-center mt-28">
        <div className="ProS-Nickname-Input flex gap-6 items-center">
          <p>Printer Nickname</p>
          <input
            placeholder={nickname}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength="18"
            style={{
              color: "#919B94",
              border: "3px solid #2BC25F",
              borderRadius: "5px",
              padding: "1rem 15rem 1rem 1rem",
              outline: "none",
              display: "flex",
              alignItems: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
};

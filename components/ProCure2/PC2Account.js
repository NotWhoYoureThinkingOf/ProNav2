import { Visibility } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import PC2ResinButton from "./PC2ResinButton";
import { useRecoilState } from "recoil";
import { proCure2LoginState } from "../../atoms/proCure2LoginAtom";
import { proCure2LanguageScreenState } from "../../atoms/proCure2LanguageScreenAtom";
import PC2LangaugeScreen from "./PC2LangaugeScreen";

const PC2Account = () => {
  const [user, setUser] = useRecoilState(proCure2LoginState);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [languageScreen, setLanguageScreen] = useRecoilState(
    proCure2LanguageScreenState
  );

  useEffect(() => {
    setPassword(null);
  }, [user]);

  console.log("email", email);
  console.log("user", user);

  return (
    <div className="ProCure2-Account">
      {!languageScreen ? (
        <>
          <div className="ProCure2-Account-Header flex items-center justify-center">
            <h3 className="text-[28px] font-semibold pb-4 -mt-1">
              SprintRay Account
            </h3>
          </div>
          {user === null ? (
            <div className="ProCure2-Login-Message flex flex-col items-center">
              <p className="text-[24px] leading-[1.85rem]">
                Log into your SprintRay account.
              </p>
              <p className="text-[24px] leading-[1.85rem]">
                If you do not already have one
              </p>
              <p className="text-[24px] leading-[1.85rem]">
                or forgot your password please visit
              </p>
              <p className="text-[24px] leading-[1.85rem] font-semibold">
                https://dashboard.sprintray.com
              </p>
            </div>
          ) : (
            <p className="text-[24px] font-semibold mx-4">
              Connected Account: <span className="font-normal">{user}</span>
            </p>
          )}

          <div className="ProCure2-Account-Fields flex flex-col gap-5 mt-10 mb-6">
            {user === null ? (
              <>
                <div className="ProCure2-Account-Email bg-white border-2 border-[#28B358] rounded-lg flex items-center justify-between px-4 h-[78px]">
                  <input
                    className="text-[#919B94] text-[24px] outline-none"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="ProCure2-Account-Password bg-white border-2 border-[#28B358] rounded-lg flex items-center justify-between px-4 h-[78px]">
                  <input
                    type="password"
                    className="text-[#919B94] text-[24px] outline-none"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Visibility style={{ fontSize: "2rem", color: "#919B94" }} />
                </div>
                <div
                  className="h-[78px] bg-gradient-to-b from-[#2BC25F] to-[#1B7D3D] rounded-lg flex items-center justify-center cursor-pointer transition hover:brightness-125"
                  onClick={() => setUser(email)}
                >
                  <p className="text-[24px] font-semibold">Login</p>
                </div>
              </>
            ) : (
              <div className="ProCure2-Account-Logout">
                <div
                  className="h-[78px] bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] rounded-lg my-4 flex items-center justify-center cursor-pointer transition hover:brightness-125"
                  onClick={() => setUser(null)}
                >
                  <p className="text-[24px] font-semibold">Log Out</p>
                </div>
              </div>
            )}
          </div>
          <div className="ProCure2-Account-Language border-t-[1px] border-[#CCCCCC] border-opacity-50 flex flex-col items-center">
            <h3 className="text-[28px] font-semibold mt-5 mb-6">
              System Language
            </h3>
            <div className="w-full" onClick={() => setLanguageScreen(true)}>
              <PC2ResinButton resin="English" />
            </div>
          </div>
        </>
      ) : (
        <>
          <PC2LangaugeScreen />
        </>
      )}
    </div>
  );
};

export default PC2Account;

import { Refresh } from "@material-ui/icons";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { proSUserState } from "../../atoms/proSUserAtom";

export const ProSAccount = () => {
  const [user, setUser] = useRecoilState(proSUserState);
  const [signInUp, setSignInUp] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [randomCode, setRandomCode] = useState(null);

  useEffect(() => {
    setRandomCode(Math.random().toString(36).substring(2, 10));
  }, []);

  const signInButtonPressed = () => {
    setSignInUp(true);
    setSignIn(true);
    console.log("sign in button");
  };

  const signUpButtonPressed = () => {
    setSignInUp(true);
    setSignIn(false);
    console.log("sign up button");
  };

  const generateNewCode = () => {
    setRandomCode(Math.random().toString(36).substring(2, 10));
  };

  return (
    <div className="ProS-Account px-3 text-[1.75rem] font-semibold">
      <div className="ProS-Account">
        {!signInUp && user && (
          <div>
            <h3 className="ProS-Account-Title">
              SprintRay Account Information
            </h3>
            <div className="ProS-Account-Connected flex flex-col font-normal text-[1.4rem] mt-2">
              <div className="ProS-Account-Current flex">
                <p className="">Connected Account:&nbsp;</p>
                <p>User</p>
              </div>
              <div className="ProS-Account-Type flex">
                <p className="">Account Type:&nbsp;</p>
                <p>Pro</p>
              </div>
            </div>
            <div className="ProS-Account-Button bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer relative transition mt-6 hover:brightness-125">
              <p
                className="text-[24px] font-normal"
                onClick={() => setUser(false)}
              >
                Sign Out
              </p>
            </div>
          </div>
        )}
        {!signInUp && !user && (
          <div>
            <h3 className="ProS-Account-Title">SprintRay Account</h3>
            <p className="font-normal text-[1.4rem] mt-3">
              Add your SprintRay account to this printer to activate cloud
              features.
            </p>
            <div className="ProS-Account-Button bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer relative transition mt-10 hover:brightness-125">
              <p
                className="text-[24px] font-normal"
                onClick={() => {
                  signInButtonPressed();
                }}
              >
                Sign In
              </p>
            </div>
            <div className="ProS-Account-Button bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer relative transition mt-6 hover:brightness-125">
              <p
                className="text-[24px] font-normal"
                onClick={() => {
                  signUpButtonPressed();
                }}
              >
                Sign Up
              </p>
            </div>
          </div>
        )}
        {signInUp && !user && (
          <div>
            <h3 className="ProS-Account-Title">
              {signIn ? "Sign In" : "Sign Up"}
            </h3>
            <div className="ProS-Account-QR flex items-center gap-14 my-5 relative">
              <img
                className="w-[266px] h-[266px]"
                src={
                  signIn ? "/sprintray-qr.png" : "/sprintray-qr-new-user.png"
                }
                alt=""
              />
              {signIn ? (
                <p className="font-normal text-[1.5rem] mt-3">
                  Scan the QR code to sign in to your
                  <br />
                  SprintRay account or visit:
                  <br />
                  auth.sprintray.com/activate
                </p>
              ) : (
                <p className="font-normal text-[1.5rem] mt-3">
                  Scan the QR code to sign up for your
                  <br />
                  SprintRay account or visit:
                  <br />
                  auth.sprintray.com/new-user
                </p>
              )}
              <div
                className=""
                onClick={() => {
                  setUser(true);
                  setSignInUp(false);
                  setSignIn(true);
                }}
              >
                <div className="absolute top-[-3rem] right-0 border-2 rounded p-2 font-semibold text-[1.2rem] text-center cursor-pointer">
                  {signIn ? "Sign in as User" : "Sign up as User"}
                  <br />
                  <span className="font-normal">
                    (Option not available on printer)
                  </span>
                </div>
              </div>
            </div>
            <p className="font-normal text-[1.5rem] mt-2">
              Once the page opens up, use this activation code:
            </p>
            <div className="flex items-center w-4/5">
              <div className="ProS-Account-Code flex-1">
                <p className="uppercase text-[56px]">{randomCode}</p>
              </div>
              <div
                className="flex items-center gap-4 cursor-pointer select-none"
                onClick={() => generateNewCode()}
              >
                <Refresh style={{ fontSize: "3rem" }} />
                <p className="text-[2rem]">Refresh Code</p>
              </div>
            </div>

            <div className="ProS-Account-SignIn-Button bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer relative transition mt-4 hover:brightness-125">
              <p
                className="text-[24px] font-normal select-none"
                onClick={() => {
                  setSignIn(!signIn);
                  generateNewCode();
                }}
              >
                {signIn ? "Switch to Sign Up" : "Switch to Sign In"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

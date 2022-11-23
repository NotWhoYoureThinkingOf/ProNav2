import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { proSUserState } from "../../atoms/proSUserAtom";

export const ProSAccount = () => {
  const [user, setUser] = useRecoilState(proSUserState);
  const [signInUp, setSignInUp] = useState(false);

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
              <p className="text-[24px] font-normal" onClick={() => {}}>
                Sign In
              </p>
            </div>
            <div className="ProS-Account-Button bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer relative transition mt-6 hover:brightness-125">
              <p className="text-[24px] font-normal" onClick={() => {}}>
                Sign Up
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React from "react";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { ProSUnifiedOption } from "./ProSUnifiedOption";
import { proSLoginState } from "../../../atoms/proSLoginState";
import { CheckCircle } from "@material-ui/icons";
import { useRecoilState } from "recoil";

export const ProSUnifiedAccount = () => {
  const [loggedIn, setLoggedIn] = useRecoilState(proSLoginState);
  return (
    <div className="ProSUnifiedAccount flex flex-col px-14">
      <ProSUnifiedScreenHeader title="SprintRay Account" />
      {!loggedIn && (
        <>
          <div className="AccountText mt-8">
            <p className="opacity-[65%] text-[26px]">
              If you already have an account, please sign in. If you are new to
              SprintRay, please
              <br />
              sign up for an account.
            </p>
          </div>
          <div className="AccountOptions mt-20 flex flex-col gap-6">
            <p className="font-bold text-[26px]">Already have an account?</p>
            <ProSUnifiedOption Enter title={"Sign In"} />
            <p className="font-bold text-[26px]">New to SprintRay?</p>
            <ProSUnifiedOption Enter title={"Sign Up"} />
          </div>
        </>
      )}
    </div>
  );
};

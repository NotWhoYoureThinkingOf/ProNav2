import React from "react";
import { useRecoilState } from "recoil";
import { proSUnifiedBusinessHoursEnabledState } from "../../../atoms/proSUnifiedBusinessHoursEnabledState";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { ProSUnifiedOption } from "./ProSUnifiedOption";
import { ProSUnifiedButtonToggle } from "./ProSUnifiedButtonToggle";
import { ProSUnifiedBottomButton } from "./ProSUnifiedBottomButton";

export const ProSUnifiedBusinessHours = () => {
  const [enabled, setEnabled] = useRecoilState(
    proSUnifiedBusinessHoursEnabledState
  );

  return (
    <div className="ProSUnifiedBusinessHours relative pb-[13rem]">
      <ProSUnifiedScreenHeader
        GoBack
        location={"unifiedSettings"}
        title={"Business Hours"}
      />
      <div className="BusinessHoursContent flex flex-col pt-14">
        <div className="BusinessHoursText opacity-[65%] text-[24px] w-[1047px] flex flex-col gap-6 leading-[28px]">
          <p>
            Set your schedule so Pro S is always ready to print when you need it
            and conserves power when you don't.
          </p>
          <p>
            During business hours, Pro S will continuously heat the resin tank
            and build platform. Outside of business hours, it will sleep to save
            power.
          </p>
        </div>
        <div className="BusinessHoursOptions flex flex-col gap-6 w-full pt-14">
          <div className="EnableToggle flex justify-between items-center text-[26px]">
            <h4>Business Hours</h4>
            <div className="w-[290px]">
              <ProSUnifiedButtonToggle
                leftText={"Enabled"}
                rightText={"Disabled"}
                leftFunction={() => setEnabled(true)}
                rightFunction={() => setEnabled(false)}
                screen="BusinessHours"
                height="80px"
              />
            </div>
          </div>
          {enabled && (
            <div className="BusinessDays flex flex-col gap-2 mt-6">
              <ProSUnifiedOption Enter title="Sunday" status="Closed" />
              <ProSUnifiedOption
                Enter
                title="Monday"
                status="8:00 AM - 5:00 PM"
              />
              <ProSUnifiedOption
                Enter
                title="Tuesday"
                status="8:00 AM - 5:00 PM"
              />
              <ProSUnifiedOption
                Enter
                title="Wednesday"
                status="9:00 AM - 12:00 PM"
              />
              <ProSUnifiedOption
                Enter
                title="Thursday"
                status="9:00 AM - 6:00 PM"
              />
              <ProSUnifiedOption
                Enter
                title="Friday"
                status="8:00 AM - 4:00 PM"
              />
              <ProSUnifiedOption Enter title="Saturday" status="Closed" />
            </div>
          )}
        </div>
      </div>
      {enabled && <ProSUnifiedBottomButton text="Sleep Now" />}
    </div>
  );
};

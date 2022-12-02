import React, { useState } from "react";
import { ProSTimeSelector } from "./ProSTimeSelector";

export const ProSBusinessToggles = () => {
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);
  const [mondayOpen, setMondayOpen] = useState("12:00");
  const [mondayClose, setMondayClose] = useState("5:00");
  const [tuesdayOpen, setTuesdayOpen] = useState("12:00");
  const [tuesdayClose, setTuesdayClose] = useState("5:00");
  const [wednesdayOpen, setWednesdayOpen] = useState("12:00");
  const [wednesdayClose, setWednesdayClose] = useState("5:00");
  const [thursdayOpen, setThursdayOpen] = useState("12:00");
  const [thursdayClose, setThursdayClose] = useState("5:00");
  const [fridayOpen, setFridayOpen] = useState("12:00");
  const [fridayClose, setFridayClose] = useState("5:00");
  const [saturdayOpen, setSaturdayOpen] = useState("12:00");
  const [saturdayClose, setSaturdayClose] = useState("5:00");
  const [sundayOpen, setSundayOpen] = useState("12:00");
  const [sundayClose, setSundayClose] = useState("5:00");

  return (
    <div className="ProS-Business-Days">
      <div className="ProS-Business-Monday flex items-center gap-20 h-[195px]">
        <h3 className="text-[50px] w-[100px]">Mon</h3>
        <div
          className={`Pro-Main-Toggle proSToggleSwitch relative ${
            monday ? "bg-[#1B7D3D]" : "bg-[#3D3D3D]"
          }`}
          onClick={() => {
            setMonday(!monday);
          }}
        >
          <div
            className={`proSToggle absolute ${monday && "translate-x-[120%]"}`}
          ></div>
        </div>
        {monday ? (
          <div className="flex gap-12">
            <ProSTimeSelector Open opentime={mondayOpen} />
            <ProSTimeSelector Close closetime={mondayClose} />
          </div>
        ) : (
          <h3 className="text-[50px]">Closed</h3>
        )}
      </div>
      <div className="ProS-Connectivity-Line border-b-[1px] border-white w-full opacity-50 mb-6"></div>
      <div className="ProS-Business-Tuesday flex items-center gap-20 h-[195px]">
        <h3 className="text-[50px] w-[100px]">Tue</h3>
        <div
          className={`Pro-Main-Toggle proSToggleSwitch relative ${
            tuesday ? "bg-[#1B7D3D]" : "bg-[#3D3D3D]"
          }`}
          onClick={() => {
            setTuesday(!tuesday);
          }}
        >
          <div
            className={`proSToggle absolute ${tuesday && "translate-x-[120%]"}`}
          ></div>
        </div>
        {tuesday ? (
          <div className="flex gap-12">
            <ProSTimeSelector Open opentime={tuesdayOpen} />
            <ProSTimeSelector Close closetime={tuesdayClose} />
          </div>
        ) : (
          <h3 className="text-[50px]">Closed</h3>
        )}
      </div>
      <div className="ProS-Connectivity-Line border-b-[1px] border-white w-full opacity-50 mb-6"></div>
      <div className="ProS-Business-Wednesday flex items-center gap-20 h-[195px]">
        <h3 className="text-[50px] w-[100px]">Wed</h3>
        <div
          className={`Pro-Main-Toggle proSToggleSwitch relative ${
            wednesday ? "bg-[#1B7D3D]" : "bg-[#3D3D3D]"
          }`}
          onClick={() => {
            setWednesday(!wednesday);
          }}
        >
          <div
            className={`proSToggle absolute ${
              wednesday && "translate-x-[120%]"
            }`}
          ></div>
        </div>
        {wednesday ? (
          <div className="flex gap-12">
            <ProSTimeSelector Open opentime={wednesdayOpen} />
            <ProSTimeSelector Close closetime={wednesdayClose} />
          </div>
        ) : (
          <h3 className="text-[50px]">Closed</h3>
        )}
      </div>
      <div className="ProS-Connectivity-Line border-b-[1px] border-white w-full opacity-50 mb-6"></div>
      <div className="ProS-Business-Thursday flex items-center gap-20 h-[195px]">
        <h3 className="text-[50px] w-[100px]">Thu</h3>
        <div
          className={`Pro-Main-Toggle proSToggleSwitch relative ${
            thursday ? "bg-[#1B7D3D]" : "bg-[#3D3D3D]"
          }`}
          onClick={() => {
            setThursday(!thursday);
          }}
        >
          <div
            className={`proSToggle absolute ${
              thursday && "translate-x-[120%]"
            }`}
          ></div>
        </div>
        {thursday ? (
          <div className="flex gap-12">
            <ProSTimeSelector Open opentime={thursdayOpen} />
            <ProSTimeSelector Close closetime={thursdayClose} />
          </div>
        ) : (
          <h3 className="text-[50px]">Closed</h3>
        )}
      </div>
      <div className="ProS-Connectivity-Line border-b-[1px] border-white w-full opacity-50 mb-6"></div>
      <div className="ProS-Business-Friday flex items-center gap-20 h-[195px]">
        <h3 className="text-[50px] w-[100px]">Fri</h3>
        <div
          className={`Pro-Main-Toggle proSToggleSwitch relative ${
            friday ? "bg-[#1B7D3D]" : "bg-[#3D3D3D]"
          }`}
          onClick={() => {
            setFriday(!friday);
          }}
        >
          <div
            className={`proSToggle absolute ${friday && "translate-x-[120%]"}`}
          ></div>
        </div>
        {friday ? (
          <div className="flex gap-12">
            <ProSTimeSelector Open opentime={fridayOpen} />
            <ProSTimeSelector Close closetime={fridayClose} />
          </div>
        ) : (
          <h3 className="text-[50px]">Closed</h3>
        )}
      </div>
      <div className="ProS-Connectivity-Line border-b-[1px] border-white w-full opacity-50 mb-6"></div>
      <div className="ProS-Business-Saturday flex items-center gap-20 h-[195px]">
        <h3 className="text-[50px] w-[100px]">Sat</h3>
        <div
          className={`Pro-Main-Toggle proSToggleSwitch relative ${
            saturday ? "bg-[#1B7D3D]" : "bg-[#3D3D3D]"
          }`}
          onClick={() => {
            setSaturday(!saturday);
          }}
        >
          <div
            className={`proSToggle absolute ${
              saturday && "translate-x-[120%]"
            }`}
          ></div>
        </div>
        {saturday ? (
          <div className="flex gap-12">
            <ProSTimeSelector Open opentime={saturdayOpen} />
            <ProSTimeSelector Close closetime={saturdayClose} />
          </div>
        ) : (
          <h3 className="text-[50px]">Closed</h3>
        )}
      </div>
      <div className="ProS-Connectivity-Line border-b-[1px] border-white w-full opacity-50 mb-6"></div>
      <div className="ProS-Business-Sunday flex items-center gap-20 h-[195px]">
        <h3 className="text-[50px] w-[100px]">Sun</h3>
        <div
          className={`Pro-Main-Toggle proSToggleSwitch relative ${
            sunday ? "bg-[#1B7D3D]" : "bg-[#3D3D3D]"
          }`}
          onClick={() => {
            setSunday(!sunday);
          }}
        >
          <div
            className={`proSToggle absolute ${sunday && "translate-x-[120%]"}`}
          ></div>
        </div>
        {sunday ? (
          <div className="flex gap-12">
            <ProSTimeSelector Open opentime={sundayOpen} />
            <ProSTimeSelector Close closetime={sundayClose} />
          </div>
        ) : (
          <h3 className="text-[50px]">Closed</h3>
        )}
      </div>
    </div>
  );
};

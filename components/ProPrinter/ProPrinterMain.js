import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Settings,
  Wifi,
  SignalWifi4Bar,
  SignalWifi3Bar,
  SignalWifi2Bar,
  SignalWifi1Bar,
  SignalWifi0Bar,
  WifiTethering,
  VpnKey,
  AccountBox,
  GetApp,
} from "@material-ui/icons";

const ProPrinterMain = () => {
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);
  const [thirdRow, setThirdRow] = useState([]);
  const [shifted, setShifted] = useState(false);
  const [local, setLocal] = useState(true);
  const [wireless, setWireless] = useState(true);
  const [customer, setCustomer] = useState("");
  const [network, setNetwork] = useState(null);
  const [nickname, setNickname] = useState(null);

  return (
    <div className="text-white flex flex-col justify-between items-center w-full h-[89%] overflow-hidden pt-[50px] pb-[40px]">
      <div className="flex flex-col items-center gap-[25px]">
        <h2 className="text-[2.7rem]">Ready to Print</h2>
        <p>Upload print job from desktop or insert a USB drive to start</p>
      </div>
      <div className="flex flex-col items-center gap-[5px] border-2 border-white rounded-[5px] pt-[15px] py-[15px] px-[80px]">
        {nickname ? <h3>{nickname}</h3> : <h3>Printer Nickname</h3>}
        <p>P95-12A3B45C</p>
      </div>
      <div className="flex w-4/5 justify-between">
        <div className="flex items-center gap-[10px]">
          <Wifi />
          {network === null ? (
            <a href="/proPrinter">Connect to WiFi</a>
          ) : (
            <a href="/proPrinter">
              <h4>{network}</h4>
            </a>
          )}
        </div>
        {customer === "" ? (
          <a
            href="/proPrinter"
            className="flex items-center gap-[5px] p-[5px] no-underline"
          >
            <h4>Connect to Dashboard</h4>
            <ChevronRight />
          </a>
        ) : (
          <a
            href=""
            className="flex items-center gap-[5px] p-[5px] no-underline"
          >
            <AccountBox />
            <h4>{customer}</h4>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProPrinterMain;

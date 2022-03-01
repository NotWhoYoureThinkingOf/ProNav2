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
import { useRecoilState } from "recoil";
import { proPrinterNetworkNameState } from "../../atoms/proPrinterNetworkName";

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

  const [networkName, setNetworkName] = useRecoilState(
    proPrinterNetworkNameState
  );

  return (
    <div className="text-white flex flex-col justify-between items-center w-full h-[89%] overflow-hidden pt-[50px] pb-[40px]">
      <div className="flex flex-col items-center gap-[25px]">
        <h2 className="text-[2.75rem] font-semibold">Ready to Print</h2>
        <p className="text-xl opacity-75">
          Upload print job from desktop or insert a USB drive to start
        </p>
      </div>
      <div className="flex flex-col items-center gap-[5px] border-2 border-white rounded-[5px] py-[10px] px-[80px]">
        {nickname ? (
          <h3>{nickname}</h3>
        ) : (
          <h3 className="text-xl font-bold">Printer Nickname</h3>
        )}
        <p className="text-lg">P95-12A3B45C</p>
      </div>
      <div className="flex w-4/5 justify-between">
        <div className="flex items-center gap-[10px]">
          <Wifi style={{ color: "lightblue" }} />
          <h4 className="text-lg">
            {networkName === "No Wifi Selected"
              ? "Connect to Wifi"
              : networkName}
          </h4>
        </div>
        {customer === "" ? (
          <div className="flex items-center gap-[5px] p-[5px]">
            <h4 className="text-lg">Connect to Dashboard</h4>
            <ChevronRight />
          </div>
        ) : (
          <div className="flex items-center gap-[5px] p-[5px]">
            <AccountBox />
            <h4 className="text-lg">{customer}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProPrinterMain;

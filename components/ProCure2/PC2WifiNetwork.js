import { Check, Wifi } from "@material-ui/icons";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { proCure2NetworkState } from "../../atoms/proCure2NetworkAtom";

const PC2WifiNetwork = ({ name, connected }) => {
  const [network, setNetwork] = useRecoilState(proCure2NetworkState);
  const [enteringPassword, setEnteringPassword] = useState(false);
  const [connectedToNetwork, setConnectedToNetwork] = useState(false);

  const connectToNetwork = () => {
    setEnteringPassword(false);
    setConnectedToNetwork(true);
    setNetwork({ name });
  };

  console.log("connectedToNetwork", connectedToNetwork);
  console.log("network", network);

  return (
    <div
      className={`ProCure2-Network flex flex-col px-1 py-4 cursor-pointer ${
        connected && "border-b-[1px] border-[rgba(51,51,51,0.3)]"
      }`}
      onClick={() => setEnteringPassword(true)}
    >
      <div className="flex items-center justify-between">
        <div className="gap-2 flex items-center">
          <Wifi style={{ fontSize: "2.75rem" }} />
          <p className="text-[28px] font-medium">{name}</p>
        </div>
        {connected && (
          <div className="bg-[#28B358] rounded-full flex justify-center items-center p-[.4rem]">
            <Check style={{ fontSize: "1.2rem" }} />
          </div>
        )}
      </div>
      {enteringPassword && (
        <div className="pt-4">
          <input
            className="h-[74px] text-[24px] px-4 rounded-lg border-2 border-[#28B358] w-full text-black"
            onKeyDown={(e) => e.code === "Enter" && connectToNetwork()}
            placeholder="Enter Password"
          />
        </div>
      )}
    </div>
  );
};

export default PC2WifiNetwork;

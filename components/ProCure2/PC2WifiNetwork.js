import { Check, Wifi } from "@material-ui/icons";
import React from "react";
import { useRecoilState } from "recoil";
import { proCure2NetworkState } from "../../atoms/proCure2NetworkAtom";

const PC2WifiNetwork = ({ name, connected }) => {
  const [network, setNetwork] = useRecoilState(proCure2NetworkState);

  return (
    <div
      className={`ProCure2-Network flex items-center justify-between px-1 py-4 cursor-pointer ${
        connected && "border-b-[1px] border-[rgba(51,51,51,0.3)]"
      }`}
      // onClick={(e) => setNetwork(e.target.innerText)}
    >
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
  );
};

export default PC2WifiNetwork;

import { useState, useEffect } from "react";
import PC2WifiNetwork from "./PC2WifiNetwork";
import { useRecoilState } from "recoil";
import { proCure2NetworkState } from "../../atoms/proCure2NetworkAtom";

const PC2Wifi = () => {
  const [wifi, setWifi] = useState(false);
  const [connectedNetwork, setConnectedNetwork] =
    useRecoilState(proCure2NetworkState);
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  useEffect(() => {
    console.log("connectedNetwork", connectedNetwork);
    console.log("selectedNetwork", selectedNetwork);
  }, [connectedNetwork, selectedNetwork]);

  const chooseNetwork = (e) => {
    setConnectedNetwork(e);
    setSelectedNetwork(e);
  };

  return (
    <div className="ProCure2-Wifi px-7">
      <div className="ProCure2-Wifi-Toggle flex items-center justify-between px-2 pt-2 pb-8">
        <h3 className="text-[50px] font-semibold">Wi-Fi</h3>
        <div
          className={`ProCure2-toggle mute-switch w-[100px] flex items-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] transition ${
            wifi && "!from-[#2BC25F] !to-[#1B7D3D]"
          }`}
          onClick={() => setWifi(!wifi)}
        >
          <div
            className={`toggle h-[46px] w-[46px] bg-white ${
              !wifi ? "ml-[.1rem]" : "ml-[3.3rem]"
            }`}
          ></div>
        </div>
      </div>
      <div className="ProCure2-Wifi-Networks">
        <div className="" onClick={() => setConnectedNetwork("Network 1")}>
          <PC2WifiNetwork
            name="Network 1"
            connected={wifi && connectedNetwork === "Network 1"}
          />
        </div>
        <div className="" onClick={() => setConnectedNetwork("Network 2")}>
          <PC2WifiNetwork
            name="Network 2"
            connected={wifi && connectedNetwork === "Network 2"}
          />
        </div>
        <div className="" onClick={() => setConnectedNetwork("Network 3")}>
          <PC2WifiNetwork
            name="Network 3"
            connected={wifi && connectedNetwork === "Network 3"}
          />
        </div>
        <div className="" onClick={() => setConnectedNetwork("Network 4")}>
          <PC2WifiNetwork
            name="Network 4"
            connected={wifi && connectedNetwork === "Network 4"}
          />
        </div>
        <div className="" onClick={() => setConnectedNetwork("Network 5")}>
          <PC2WifiNetwork
            name="Network 5"
            connected={wifi && connectedNetwork === "Network 5"}
          />
        </div>
        <div className="" onClick={() => setConnectedNetwork("Network 6")}>
          <PC2WifiNetwork
            name="Network 6"
            connected={wifi && connectedNetwork === "Network 6"}
          />
        </div>
        {/* <div className="" onClick={() => setConnectedNetwork("Network 7")}>
          <PC2WifiNetwork
            name="Network 7"
            connected={wifi && connectedNetwork === "Network 7"}
          />
        </div> */}
      </div>
    </div>
  );
};

export default PC2Wifi;
